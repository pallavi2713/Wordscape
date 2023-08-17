import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-conf";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/Login";
    });
  }

  return (
    <Router>
 {/* <nav className="navbar navbar-dark bg-dark">
  <Link to="/"> Home</Link>

  {!isAuth ? (
    <Link to="/login"> Login </Link>
  ) : (
    <>
      <Link to="/CreatePost"> Create Post </Link>
      <button onClick={signUserOut}> Log Out</button>
    </>
  )}
</nav> */}
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">Home</a>
      
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          {!isAuth ? (
          <a className="nav-item nav-link active" href="/login">login <span className="sr-only"></span></a>):(
          <a className="nav-item nav-link" href="/CreatePost">createpost</a>
          )
}
        </div>
      </div>
    </nav>






       
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/CreatePost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/Login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;