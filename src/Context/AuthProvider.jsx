import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, deleteUser, EmailAuthProvider, reauthenticateWithCredential, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase.init';

const AuthProvider = ({ children }) => {


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email,password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    } 

    const deleteuser = (password) => {
        const user = auth.currentUser;
        const credential = EmailAuthProvider.credential(user.email, password);

        return reauthenticateWithCredential(user, credential)
            .then(() => {
                // Reauthentication successful, now delete
                return deleteUser(user);
            });
    };
    const userInfo = {
        createUser,
        deleteuser,
        loginUser,
        

    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;