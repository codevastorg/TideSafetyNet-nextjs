'use client';
import { useState, useEffect } from 'react';
import { firebase_app } from '@/firebase/config';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/router';

const Home = () => {
    const [user, setUser] = useState(null);
    const router = useRouter();
    
    useEffect(() => {
        const auth = getAuth(firebase_app);
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    const signInWithGoogle = async () => {
        const auth = getAuth(firebase_app);
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            router.push('/dashboard/homepage');
        } catch (error) {
            console.error("error signing in with Google: ", error);
        }
    }

    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to the home page</p>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    );
}

export default Home;