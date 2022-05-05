import { doc, collection, onSnapshot } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { db } from '../firebase/config'

export const useDocument = (col, id) => {
  const [document, setDocument] = useState(null)
  const [error, setError] = useState(null)

  //realtime data
  useEffect(() => {
    const ref = collection(db, col)
    const newRef = doc(ref, id)

    const unsubscribe = onSnapshot(
      newRef,
      snapshot => {
        if (snapshot.data()) {
          setDocument({ ...snapshot.data(), id: snapshot.id })
          setError(null)
        } else {
          setError("Document doesn't exist")
        }
      },
      error => {
        console.log(error.message)
        setError('Could not fetch the document')
      }
    )
    return () => unsubscribe()
  }, [col, id])

  return { document, error }
}
