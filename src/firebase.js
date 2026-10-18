import { getApp, getApps, initializeApp } from 'firebase/app'
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

export async function getAlbums() {
  const missingValues = Object.entries(firebaseConfig)
    .filter(([, value]) => !value)
    .map(([key]) => key)

  if (missingValues.length > 0) {
    throw new Error(
      `Falta la configuración necesaria para cargar la discografía de Stray Kids: ${missingValues.join(', ')}.`,
    )
  }

  const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig)
  const snapshot = await getDocs(collection(getFirestore(app), 'albums'))

  return snapshot.docs.map((document) => ({
    id: document.id,
    ...document.data(),
  }))
}
