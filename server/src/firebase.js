import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCHTkc8oMU6bMpLWU9iNk9eYx3WZ7g_gFQ",
    authDomain: "lyrify-e35ac.firebaseapp.com",
    projectId: "lyrify-e35ac",
    storageBucket: "lyrify-e35ac.firebasestorage.app",
    messagingSenderId: "6720826913",
    appId: "1:6720826913:web:c085d962ebd13291963d60",
    measurementId: "G-RDVW2KKYH1"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Google Sign-In
const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        return result.user;
    } catch (error) {
        console.error('Error signing in:', error);
        throw error;
    }
};

// Logout
const logout = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error('Error logging out:', error);
        throw error;
    }
};

export { auth, signInWithGoogle, logout };
