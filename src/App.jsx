import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Catalog from "./Pages/Catalog";
import Wishlist from "./Pages/Wishlist";
import Article from "./Pages/Article";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import Atomic_Habbit from "./Pages/Book-detail/Atomic_Habits";
import Article_detail_1 from "./Pages/Article-detail/Article_detail_1";
import Transaction from "./Pages/Transaction";
import History_transaction from "./Pages/History_transaction";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/article" element={<Article />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/transaction" element={<Transaction />}></Route>
        <Route path="/history-transaction" element={<History_transaction />}></Route>

        {/* detail book */}
        <Route path="/Atomic-Habits" element={<Atomic_Habbit />}></Route>

        {/* detail article */}
        <Route path="/The-Power-of-Reading-How-Books-Shape-Our-Lives" element={<Article_detail_1/>}></Route>
        
      </Routes>
    </Router>
  );
}

export default App;
