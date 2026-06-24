import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC7eNxM3QABx6zGRD9-igY0R2h5xpPGfLs",
    authDomain: "streamvibe-26aee.firebaseapp.com",
    projectId: "streamvibe-26aee",
    storageBucket: "streamvibe-26aee.firebasestorage.app",
    messagingSenderId: "721383218597",
    appId: "1:721383218597:web:7f37d3409b99ca5edddc4c",
    measurementId: "G-Y4WMMV0B0M"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;