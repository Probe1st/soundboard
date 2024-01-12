import { useDispatch, useSelector } from 'react-redux';
import { Auth as AuthLayout } from '../layouts/';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { logIn, selectAuth, selectUserExists } from '../stores/authSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export function Auth() {
    const dispatch = useDispatch();
    const auth = useSelector(selectAuth);
    const userExists = useSelector(selectUserExists);
    const navigate = useNavigate();

    function signIn() {
        signInWithPopup(auth, new GoogleAuthProvider())
        .then(user => {
            if(user.user) {
                dispatch(logIn());
                navigate("/")
            }
        });

    }

    useEffect(() => {
        if (window.location.pathname === "/authentication" && userExists) {
            navigate("/")
        }
    }, [userExists])

    return (
        <AuthLayout authFunc={signIn} />
    )
}