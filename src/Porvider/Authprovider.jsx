import React, { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/firebase.init';
export   const authcontext = createContext (null)
const Authprovider = ({alldatashow}) => {
// auth 
const auth = getAuth(app)



const [user,setuser] = useState([])
const [loading,setloading] = useState(true)
// create user using email and password

const createuser = (email,password)=>{
    setloading(true)
return createUserWithEmailAndPassword(auth,email,password)
}


// signup with email and password

const siGninuser = (email,password)=>{

setloading(true)
return signInWithEmailAndPassword(auth,email,password)

    
}


const authinfo = {
    createuser,
    setuser,
    user,
    siGninuser
}


    return (
        <authcontext.Provider value={authinfo}>
            {alldatashow}
        </authcontext.Provider>
    );
};

export default Authprovider;