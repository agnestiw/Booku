import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Catalog from "./Pages/Catalog";
import Wishlist from "./Pages/Wishlist";
import Article from "./Pages/Article";
import About from "./Pages/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/article" element={<Article />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
