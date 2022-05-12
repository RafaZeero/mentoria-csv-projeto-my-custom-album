import { useEffect, useState } from 'react'
import { db, auth } from '../Firebase/config'
import { useAuthContext } from './useAuthContext'
import { doc, updateDoc } from 'firebase/firestore'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export const useLogout = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch, user } = useAuthContext()
  const navigate = useNavigate()

  const logout = async () => {
    setError(null)
    setIsPending(true)

    // sign the user out
    try {
      // update online status
      const myDocRef = doc(db, 'users', user.uid)
      await updateDoc(myDocRef, {
        online: false
      })
      // await signOut(auth)
      await signOut(auth)

      // dispatch logout action
      await dispatch({ type: 'LOGOUT' })

      // update state
      if (!isCancelled) {
        setIsPending(false)
        setError(null)
      }
      await navigate('/')
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

  return { logout, error, isPending }
}
