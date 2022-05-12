import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  updateProfile
} from 'firebase/auth'
import { uploadBytes, ref, getDownloadURL } from 'firebase/storage'
import { useState, useEffect } from 'react'
import { auth, storage, db } from '../Firebase/config'
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
      // const res = await signInWithPopup(auth, new GoogleAuthProvider())

      const provider = new GoogleAuthProvider()
      provider.addScope('profile')
      provider.addScope('email')
      const result = await signInWithPopup(auth, provider)

      // The signed-in user info.
      const user = result.user
      // This gives you a Google Access Token.
      const credential = GoogleAuthProvider.credentialFromResult(result)

      const token = credential.accessToken

      // create a user document
      const myDocRef = doc(db, 'users', user.uid)
      await setDoc(myDocRef, {
        online: true,
        displayName: user.displayName,
        photoURL: user.photoURL
      })

      // add display name to user
      await updateProfile(user, {
        displayName: user.displayName,
        photoURL: user.photoURL
      })

      // // The signed-in user info.
      // const user = res.user
      // // This gives you a Google Access Token.
      // const credential = GoogleAuthProvider.credentialFromResult(res)
      // const token = credential.accessToken

      // // update online status on document
      // const myDocRef = doc(db, 'users', user.uid)
      // await updateDoc(myDocRef, {
      //   online: true
      // })
      // dispatch login action
      dispatch({ type: 'LOGIN', payload: user })

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
      const res = await signInWithPopup(auth, new GithubAuthProvider())
      console.log('result: ', res)

      // The signed-in user info.
      const user = res.user
      // This gives you a Github Access Token.
      const credential = GithubAuthProvider.credentialFromResult(res)
      console.log('credential: ', credential)

      const token = credential.accessToken
      console.log('token: ', token)

      // update online status on document
      const myDocRef = doc(db, 'users', user.uid)
      await updateDoc(myDocRef, {
        online: true
      })

      // dispatch login action
      dispatch({ type: 'LOGIN', payload: user })

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
