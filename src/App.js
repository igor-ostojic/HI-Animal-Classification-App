import { useState, useEffect, useRef } from 'react';
import * as mobilenet from "@tensorflow-models/mobilenet";

//pages
import Home from './pages/Home';
import About from './pages/About';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import NavBar from './components/NavBar';
import MobileNav from './components/MobileNav';

//components




function App() {
  const [isModelLoading, setIsModelLoading] = useState(false)
  const [model, setModel] = useState(null)

  const loadModel = async () => {
    setIsModelLoading(true)
    try {
        const model = await mobilenet.load()
        setModel(model)
        setIsModelLoading(false)
    } catch (error) {
        console.log(error)
        setIsModelLoading(false)
    }
}

useEffect(() => {
  loadModel()
}, [])




  return (
    <div className="App">
      <NavBar />
      <MobileNav />
     <Home />
     {/* <About />
     <SignUp />
     <LogIn /> */}

    </div>
  );
}

export default App;
