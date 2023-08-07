import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
function App() {
  return (
    <div id="hero" className="w-screen h-screen  flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/signup" />
      </Routes>
      
    </div>
    )
}

export default App;
