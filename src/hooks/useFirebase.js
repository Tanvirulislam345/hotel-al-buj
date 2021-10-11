// import { PlayCircleFilledWhiteRounded } from "@material-ui/icons";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init"

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
        // .then(result => {
        //      console.log(result.user);
        // }).catch(error => {
        //     console.log(error.message);
        // });
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    }, []);

    const signOutUsingoogle = () => {
        signOut(auth)
            .then(result => {
                setUser({});
            }).catch(error => {
                console.log(error.message);
            });
    }

    return {
        user,
        signInUsingGoogle,
        signOutUsingoogle
    };

}

export default useFirebase;