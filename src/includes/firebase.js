import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJKengyV3DYC6v8HCFKwtHTV7FrTnE9d8",
  authDomain: "fantano-core-969b5.firebaseapp.com",
  projectId: "fantano-core-969b5",
  storageBucket: "fantano-core-969b5.appspot.com",
  messagingSenderId: "771435426511",
  appId: "1:771435426511:web:852e91795dcd46138e7dba",
  measurementId: "G-BDDRSDHTD3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Create a reference to the file we want to download
const storage = getStorage(app)
// const starsRef = ref(storage, 'texts/0-en.md')

// Get the download URL
// getDownloadURL(starsRef)
//   .then((url) => {
//     // Insert url into an <img> tag to "download"
//     console.log(url)
//   })
//   .catch((error) => {
//     // A full list of error codes is available at
//     // https://firebase.google.com/docs/storage/web/handle-errors
//     switch (error.code) {
//       case 'storage/object-not-found':
//         // File doesn't exist
//         break;
//       case 'storage/unauthorized':
//         // User doesn't have permission to access the object
//         break;
//       case 'storage/canceled':
//         // User canceled the upload
//         break;

//       // ...

//       case 'storage/unknown':
//         // Unknown error occurred, inspect the server response
//         break;
//     }
//   });

export {
  app,
  storage
}

// Create a reference under which you want to list
// const listRef = ref(storage, 'texts');

// // Find all the prefixes and items.
// listAll(listRef)
//   .then((res) => {
//     res.prefixes.forEach((folderRef) => {
//       // All the prefixes under listRef.
//       // You may call listAll() recursively on them.
//     });
//     res.items.forEach((itemRef) => {
//       // All the items under listRef.
//       console.log(itemRef)
//     });
//   }).catch((error) => {
//     // Uh-oh, an error occurred!
//     console.log(error)
//   });


// // Get a list of cities from your database
// async function getCities(db) {
//   const textsCol = collection(db, 'texts');
//   const textsSnapshot = await getDocs(textsCol)
//   const textsList = textsSnapshot.docs.map(doc => doc.data())
//   return textsList
// }

// export {
//   db
// }