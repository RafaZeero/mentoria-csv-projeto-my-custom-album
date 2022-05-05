import { useState, useEffect } from 'react'
import { auth, storage, db } from '../Firebase/config'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { uploadBytes, ref, getDownloadURL } from 'firebase/storage'

import { useAuthContext } from './useAuthContext'
import { doc, setDoc } from 'firebase/firestore'

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()

  const signup = async (email, password, displayName, thumbnail) => {
    setError(null)
    setIsPending(true)

    try {
      // signup
      const res = await createUserWithEmailAndPassword(auth, email, password)

      if (!res) {
        throw new Error('Could not complete signup')
      }

      // upload user thumbnail
      const uploadPath = `thumbnails/${res.user.uid}/${thumbnail.name}`
      await uploadBytes(ref(storage, uploadPath), thumbnail)
      const imgURL = await getDownloadURL(ref(storage, uploadPath))

      // add display name to user
      await updateProfile(res.user, { displayName, photoURL: imgURL })

      // create a user document
      const myDocRef = doc(db, 'users', res.user.uid)
      await setDoc(myDocRef, {
        online: true,
        displayName,
        photoURL: imgURL
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

  return { signup, error, isPending }
}
