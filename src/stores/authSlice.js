import { createSlice } from "@reduxjs/toolkit";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDfBXrIFsDiwYZn72PpCYKmo4veqhlliAU",
    authDomain: "sounboard-89a7d.firebaseapp.com",
    projectId: "sounboard-89a7d",
    storageBucket: "sounboard-89a7d.appspot.com",
    messagingSenderId: "465433159996",
    appId: "1:465433159996:web:5ba77137ab37abb1c29639",
    measurementId: "G-48Z285SZF6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export const authSlice = createSlice({
    name: "auth",
    initialState: {
        value: {
            auth: auth,
            userExists: auth.currentUser
        }
    },
    reducers: {
        logIn: (state) => {
            state.value.userExists = true;
        },
        logOut: (state) => {
            state.value.userExists = false;
        }
    }
});

export const { logIn, logOut } = authSlice.actions;

export const selectUserExists = (state) => state.auth.value.userExists;
export const selectAuth = (state) => state.auth.value.auth;