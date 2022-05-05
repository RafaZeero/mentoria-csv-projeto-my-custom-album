import { useReducer, useEffect, useState } from 'react'
import { db } from '../Firebase/config'
import {
  collection,
  doc,
  deleteDoc,
  Timestamp,
  addDoc,
  updateDoc
} from 'firebase/firestore'

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null
}

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case 'IS_PENDING':
      return { isPending: true, document: null, success: false, error: null }
    case 'ADDED_DOCUMENT':
      return {
        isPending: false,
        document: action.payload,
        success: true,
        error: null
      }
    case 'DELETED_DOCUMENT':
      return { isPending: false, document: null, success: true, error: null }
    case 'UPDATED_DOCUMENT':
      return {
        isPending: false,
        document: action.payload,
        success: true,
        error: null
      }
    case 'ERROR':
      return {
        isPending: false,
        document: null,
        success: false,
        error: action.payload
      }
    default:
      return state
  }
}

export const useFirestore = myCol => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState)
  const [isCancelled, setIsCancelled] = useState(false)

  // collection ref
  const ref = collection(db, myCol)

  // only dispatch is not cancelled
  const dispatchIfNotCancelled = action => {
    if (!isCancelled) {
      dispatch(action)
    }
  }

  // add a document
  const addDocument = async doc => {
    dispatch({ type: 'IS_PENDING' })

    try {
      const createdAt = Timestamp.fromDate(new Date())
      const addedDocument = await addDoc(ref, { ...doc, createdAt })
      dispatchIfNotCancelled({ type: 'ADDED_DOCUMENT', payload: addedDocument })
    } catch (err) {
      dispatchIfNotCancelled({ type: 'ERROR', payload: err.message })
    }
  }

  // delete a document
  const deleteDocument = async id => {
    dispatch({ type: 'IS_PENDING' })

    try {
      const newRef = await deleteDoc(doc(ref, id))
      dispatchIfNotCancelled({ type: 'DELETED_DOCUMENT' })
      return newRef
    } catch (err) {
      dispatchIfNotCancelled({ type: 'ERROR', payload: 'could not delete' })
    }
  }

  // update a document
  const updateDocument = async (id, updates) => {
    dispatch({ type: 'IS_PENDING' })

    try {
      const updatedDoc = await updateDoc(doc(ref, id), updates)
      dispatchIfNotCancelled({ type: 'UPDATED_DOCUMENT', payload: updatedDoc })
      return updatedDoc
    } catch (err) {
      dispatchIfNotCancelled({ type: 'ERROR', payload: err.message })
      return null
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { addDocument, deleteDocument, updateDocument, response }
}
