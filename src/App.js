import { onAuthStateChanged } from "firebase/auth";
import Header from "./components/UI/Header";
import Router from "./components/router/Router";
import { useDispatch, useSelector } from "react-redux";
import { logIn, logOut, selectAuth, selectUserExists } from "./stores/authSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector(selectAuth);
  const userExists = useSelector(selectUserExists);

  onAuthStateChanged(auth, user => {
    // console.log(user)
    if (user?.displayName) {
      dispatch(logIn())
    } else {
      dispatch(logOut())
    }
  });

  const navigate = useNavigate();

  useEffect(() => {
    if(window.location.pathname === "/" && userExists) {
      navigate("/authentication")
    }
  }, [userExists])

  return (
    <>
      <Header />
      <Router />
    </>
  );
}

export default App;
