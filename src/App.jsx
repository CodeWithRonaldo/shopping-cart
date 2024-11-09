import ShoppingCart from "./components/ShoppingCart";
// import Navbar from "./components/NavBar";
// import Home from "./components/Home";
// import Products from "./components/Products";
// import About from "./components/About.jsx";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Router>
        <Navbar />
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/about" element={<About />} />
        </Switch>
      </Router> */}
      <ShoppingCart />
    </>
  );
}

export default App;
