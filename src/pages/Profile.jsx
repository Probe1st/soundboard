import { useSelector } from 'react-redux';
import { Profile as ProfileLayout } from '../layouts/Profile';
import { signOut } from 'firebase/auth';
import { selectAuth } from '../stores/authSlice';
import { useNavigate } from 'react-router-dom';

export function Profile() {
    const auth = useSelector(selectAuth);
    const navigate = useNavigate();

    function logOut() {
        signOut(auth)
        .then(user => {
            if(user) {
                navigate("/authentication");
            }
        })
        
    }

    return (
        <ProfileLayout authFunc={logOut} />
    )
}