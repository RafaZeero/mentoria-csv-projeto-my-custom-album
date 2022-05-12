import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  updateProfile
} from 'firebase/auth'
import { useState, useEffect } from 'react'
import { auth, db } from '../Firebase/config'
import { useAuthContext } from './useAuthContext'
import { doc, updateDoc, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

export const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()

  const navigate = useNavigate()

  const loginWithGoogle = async () => {
    setError(null)
    setIsPending(true)

    try {
      const providerGoogle = new GoogleAuthProvider()
      providerGoogle.addScope('profile')
      providerGoogle.addScope('email')
      const result = await signInWithPopup(auth, providerGoogle)
      // console.log('result: ', result)

      // The signed-in user info.
      const userGoogle = result.user
      // This gives you a Google Access Token.
      const credentialGoogle = GoogleAuthProvider.credentialFromResult(result)

      const tokenGoogle = credentialGoogle.accessToken
      // console.log('credential: ', credentialGoogle)

      // create a user document
      const myDocRef = doc(db, 'users', userGoogle.uid)
      await setDoc(myDocRef, {
        online: true,
        displayName: userGoogle.displayName,
        photoURL: userGoogle.photoURL
      })

      // add display name to user
      await updateProfile(userGoogle, {
        displayName: userGoogle.displayName,
        photoURL: userGoogle.photoURL
      })

      dispatch({ type: 'LOGIN', payload: userGoogle })

      if (!isCancelled) {
        setIsPending(false)
        setError(null)
        navigate('/')
      }
    } catch (err) {
      if (!isCancelled) {
        setError(err.message)
        setIsPending(false)
      }
    }
  }

  const loginWithGithub = async () => {
    setError(null)
    setIsPending(true)

    try {
      const providerGithub = new GithubAuthProvider()
      providerGithub.addScope('repo')
      const result = await signInWithPopup(auth, providerGithub)

      // The signed-in user info.
      const userGithub = result.user
      // This gives you a Github Access Token.
      const credentialGithub = GithubAuthProvider.credentialFromResult(result)

      const tokenGithub = credentialGithub.accessToken

      // create a user document
      const myDocRef = doc(db, 'users', userGithub.uid)
      await setDoc(myDocRef, {
        online: true,
        displayName: userGithub.displayName,
        photoURL: userGithub.photoURL
      })

      // add display name to user
      await updateProfile(userGithub, {
        displayName: userGithub.displayName,
        photoURL: userGithub.photoURL
      })

      // dispatch login action
      dispatch({ type: 'LOGIN', payload: userGithub })

      if (!isCancelled) {
        setIsPending(false)
        setError(null)
        navigate('/')
      }
    } catch (err) {
      console.log(err)
      if (!isCancelled) {
        setError(err.message)
        setIsPending(false)
      }
    }
  }

  const login = async (email, password) => {
    setError(null)
    setIsPending(true)

    try {
      // login
      const res = await signInWithEmailAndPassword(auth, email, password)

      // update online status on document
      const myDocRef = doc(db, 'users', res.user.uid)
      await updateDoc(myDocRef, {
        online: true
      })

      // dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user })

      if (!isCancelled) {
        setIsPending(false)
        setError(null)
      }
    } catch (err) {
      if (!isCancelled) {
        setError(err.message)
        setIsPending(false)
      }
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { login, isPending, error, loginWithGoogle, loginWithGithub }
}
