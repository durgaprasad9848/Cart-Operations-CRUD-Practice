import NavigationBar from "./NavigationBar";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import NavBar from "./Pages/NavBar";
import Cart from "./Pages/Cart";
import Products from "./Pages/Products";
function App() {
  console.log("Client started");
  return (
    <Router>
      <div className="App">
        <div>
          <NavBar />
        </div>
        <Routes>
          <Route exact path="/" element={<Products />}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
