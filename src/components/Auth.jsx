// import { useState } from 'react'
// import { useLogin } from '../hooks/useLogin'

// export default function Auth() {
//   const [index, setIndex] = useState(false)
//   const toggleIndex = () => {
//     setIndex(prevState => !prevState)
//   }
//   const {} = useLogin()

//   return (
//     <div className="container">
//       {/* {!index ? <Signin /> : <Signup />} */}

//       <p onClick={toggleIndex}>
//         {!index ? 'New user? Click here ' : 'Already have an acount?'}
//       </p>
//     </div>
//   )
// }

// const provider = new GithubAuthProvider()

// signInWithPopup(auth, provider)
//   .then(result => {
//     // This gives you a GitHub Access Token. You can use it to access the GitHub API.
//     const credential = GithubAuthProvider.credentialFromResult(result)
//     const token = credential.accessToken

//     // The signed-in user info.
//     const user = result.user
//     // ...
//   })
//   .catch(error => {
//     // Handle Errors here.
//     const errorCode = error.code
//     const errorMessage = error.message
//     // The email of the user's account used.
//     const email = error.email
//     // The AuthCredential type that was used.
//     const credential = GithubAuthProvider.credentialFromError(error)
//     // ...
//   })

// getRedirectResult(auth)
//   .then(result => {
//     const credential = GithubAuthProvider.credentialFromResult(result)
//     if (credential) {
//       // This gives you a GitHub Access Token. You can use it to access the GitHub API.
//       const token = credential.accessToken
//       // ...
//     }

//     // The signed-in user info.
//     const user = result.user
//   })
//   .catch(error => {
//     // Handle Errors here.
//     const errorCode = error.code
//     const errorMessage = error.message
//     // The email of the user's account used.
//     const email = error.email
//     // The AuthCredential type that was used.
//     const credential = GithubAuthProvider.credentialFromError(error)
//     // ...
//   })

// signOut(auth)
//   .then(() => {
//     // Sign-out successful.
//   })
//   .catch(error => {
//     // An error happened.
//   })
