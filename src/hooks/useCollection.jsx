import { useEffect, useState, useRef } from 'react'
import { db } from '../firebase/config'

// firebase imports
import {
  collection,
  onSnapshot,
  query as queryFirebase,
  orderBy as orderByFirebase,
  where
} from 'firebase/firestore'

export const useCollection = (c, _query, _orderBy) => {
  const [documents, setDocuments] = useState(null)
  const [error, setError] = useState(null)

  // if we don't use a ref --> infinite loop in useEffect
  // _query is an array and is "different" on every function call
  const query = useRef(_query).current
  const orderBy = useRef(_orderBy).current

  useEffect(() => {
    let ref = collection(db, c)

    if (query) {
      const q = queryFirebase(ref, where(...query))
      ref = q
      // ref = ref.where(...query)
    }
    if (orderBy) {
      const q = queryFirebase(ref, orderByFirebase(...orderBy))
      ref = q
      // ref = ref.orderBy(...orderBy)
    }

    const unsubscribe = onSnapshot(
      ref,
      snapshot => {
        let results = []
        snapshot.forEach(doc => {
          results.push({ ...doc.data(), id: doc.id })
        })

        // update state
        setDocuments(results)
        setError(null)
      },
      error => {
        console.log(error)
        setError('could not fetch the data')
      }
    )

    // unsubscribe on unmount
    return () => unsubscribe()
  }, [c, query, orderBy])

  return { documents, error }
}
