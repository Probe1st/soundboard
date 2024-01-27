import { useEffect } from "react";
import Header from "./components/UI/Header";
import Router from "./components/router/Router";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  
  useEffect(() => {
    if (window.location.href !== "/") {
      navigate("/")
    }
  }, [])

  return (
    <>
      <Header />
      <Router />
    </>
  );
}

export default App;
