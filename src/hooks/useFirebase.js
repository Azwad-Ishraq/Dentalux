import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";



const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading,setIsloading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth()



    const signInUsingGoogle = () => {
        setIsloading(true)

        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .finally(()=> setIsloading(false))
    }
    const logOut = ()=> {
        signOut(auth)
        .then(()=>{
            setUser({})
        })
        .finally(()=> setIsloading(false))
    }

    useEffect(()=>{
        
        
            onAuthStateChanged(auth,(user)=>{
                if (user) {
    
                    setUser(user)
                    
                  } else{
                      setUser({})
                  }
                  setIsloading(false)
            })    
        
        
        
    },[])


    return {
        user,
        signInUsingGoogle,
        logOut,
        setUser,
        isLoading
    }
}

export default useFirebase