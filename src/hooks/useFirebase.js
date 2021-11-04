import { useEffect, useState } from 'react';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut
} from "firebase/auth";
import initializeAuthentication from '../component/Firebase.config/Firebase.init';

initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();

    const signUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)


    }
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false))
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
    }, [])

    return {
        user,
        setUser,
        error,
        setError,
        isLoading,
        setIsLoading,
        signUsingGoogle,
        logOut
    }
};

export default useFirebase;