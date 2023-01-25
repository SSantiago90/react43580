// Software Development Kit
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
  where,
  query,
} from "firebase/firestore";
//1. Iniciar la conexión a Firestore

const firebaseConfig = {
  apiKey: "AIzaSyC-QmGmyJonplsGjtZyy2oucyvHTvMlVGY",
  authDomain: "react43580.firebaseapp.com",
  projectId: "react43580",
  storageBucket: "react43580.appspot.com",
  messagingSenderId: "314259173416",
  appId: "1:314259173416:web:3006aa00cdac013273451d",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export function testApp() {
  console.log("Conectandonos a firestore", db);
}

//1. Obtener un producto
export async function getSingleItem(itemid) {
  const docRef = doc(db, "products", itemid);
  const snapshot = await getDoc(docRef);

  //return  {...snapshot.data(), id: snapshot.id};
  const docData = snapshot.data();
  docData.id = snapshot.id;
  return docData;
}

//2. Obtener todos los productos para el ILC
export async function getItems() {
  const productsCollection = collection(db, "products");
  const querySnapshot = await getDocs(productsCollection);

  const dataDocs = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return dataDocs;
}

export function getItemsPromise() {
  return new Promise((resolve, reject) => {
    const productsCollectionRef = collection(db, "products");
    getDocs(productsCollectionRef).then((querySnapshot) => {
      const dataDocs = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      resolve(dataDocs);
    });
  });
}

//3. Obtener los productos según su category
export async function getItemsByCategory(categoryid) {
  const productsCollectionRef = collection(db, "products");

  const q = query(productsCollectionRef, where("category", "==", categoryid));

  const querySnapshot = await getDocs(q);

  const dataDocs = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  console.log(dataDocs);
}
