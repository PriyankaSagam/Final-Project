// import dependencies
import { useState } from "react";
import { Routes, Route } from "react-router-dom";


// import my functionality that I've added
import { getUser } from "../utilities/users-services";

// css
import "./App.css";

// import pages
import AuthPage from "./AuthPage";
// import NewOrderPage from "./NewOrderPage";
//import Jewelry from "./Jewelry";
// import components
import NavBar from "../components/NavBar";
import Cart from "../components/Cart"
import ProductList from "./ProductList";

function App() {
  const [user, setUser] = useState(getUser());

  // in here
  // use the useState hook to define a state variable called user
  // initialize that to null
  // the setter function should be named according to convention
  return (
    <>
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
           <Route path="/jewelry" element={<ProductList />} />
           <Route path="/cart" element={<Cart />} />

          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </>
  );
}

export default App;