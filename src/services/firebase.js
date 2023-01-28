import { initializeApp } from "firebase/app";
// SDK DE FIREBASE
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCTbhfDefmVemkjFe9LuqxGFNu9KbUt0Bg",
  authDomain: "react34870.firebaseapp.com",
  projectId: "react34870",
  storageBucket: "react34870.appspot.com",
  messagingSenderId: "542619477946",
  appId: "1:542619477946:web:ae1551a30cdeccd135df83",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Funcion que retorna todos los items de la colección "Productos"
export async function getItems() {
  // 1. Necesito una referencia a la colección
  const productsCollectionRef = collection(db, "productos");

  //2. Pedirle a Firebase los documentos de esa colección
  const snapshot = await getDocs(productsCollectionRef);

  // 3. Mapeamos el snapshot para sacar los datos
  const docsData = snapshot.docs.map((doc) => {
    //return {...doc.data(), id: doc.id}
    let dataOK = doc.data();
    dataOK.id = doc.id;
    return dataOK;
  });
  return docsData; // resolve(docsData) -> then
}

// Funcion que retorna un documento segun su ID
export async function getSingleItem(itemid) {
  // 1. Necesito una referencia a la colección
  const productsCollectionRef = collection(db, "productos");

  // 2. Referencia al documento
  const productRef = doc(productsCollectionRef, itemid);

  // 3. Recibimos el snap del doc con getDoc(referencia)
  const snapshot = await getDoc(productRef);

  return { ...snapshot.data(), id: snapshot.id };
}

//Funcion que retorna docs de una colección segun una Query o "consulta"
export async function getItemsByCategory(category) {
  // 1. Necesito una referencia a la colección
  const productsCollectionRef = collection(db, "productos");

  // 2. Crear una query personalizada
  console.log(category);
  const q = query(productsCollectionRef, where("categoria", "==", category));

  //3. Pedirle a Firebase los documentos de esa Query
  const snapshot = await getDocs(q);

  // 4. Mapeamos el snapshot para sacar los datos
  const docsData = snapshot.docs.map((doc) => {
    //return {...doc.data(), id: doc.id}
    let dataOK = doc.data();
    dataOK.id = doc.id;
    return dataOK;
  });
  return docsData; // resolve(docsData) -> then
}
