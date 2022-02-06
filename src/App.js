import { useState, useEffect, useRef } from "react";
import { useAuthContext } from "./hooks/useAuthContext";
import * as mobilenet from "@tensorflow-models/mobilenet";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import MainUserPage from "./pages/MainUserPage";

//components
import NavBar from "./components/NavBar";
import MobileNav from "./components/MobileNav";

function App() {

  const {authIsReady, user} = useAuthContext();


  // const [isModelLoading, setIsModelLoading] = useState(false);
  // const [model, setModel] = useState(null);

  // const loadModel = async () => {
  //   setIsModelLoading(true);
  //   try {
  //     const model = await mobilenet.load();
  //     setModel(model);
  //     setIsModelLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //     setIsModelLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   loadModel();
  // }, []);

 
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
            <NavBar />
            <MobileNav />
            <Routes>
              <Route path="/" element={!user && <Home /> || user && <Navigate replace to="/userPage" />} />
              <Route path="/about" element={!user && <About /> || user && <Navigate replace to="/userPage" />} />
              <Route path="/signup" element={!user && <SignUp /> || user && <Navigate replace to="/userPage" />} />
              <Route path="/login" element={!user && <LogIn /> || user && <Navigate replace to="/userPage" />} />
              <Route path="/userPage" element={user && <MainUserPage /> || !user && <Navigate replace to="/" />} />
            </Routes>
        </BrowserRouter>
      )}
    </div>

  );
}

export default App;
