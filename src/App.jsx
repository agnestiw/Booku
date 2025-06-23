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
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Edit_Profile from "./Pages/Edit_Profile";
import Dashboard from "./Pages/Admin/Dashboard";
import Products from "./Pages/Admin/Products";
import Articles from "./Pages/Admin/Articles";
import Transactions from "./Pages/Admin/Transactions";
import Users from "./Pages/Admin/Users";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/article" element={<Article />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />}></Route>

        <Route path="/profile/agnesti-wulansari" element={<Profile />}></Route>
        <Route path="/profile/agnesti-wulansari/edit" element={<Edit_Profile />}></Route>

        <Route path="/transaction" element={<Transaction />}></Route>

        {/* detail book */}
        <Route path="/Atomic-Habits" element={<Atomic_Habbit />}></Route>

        {/* detail article */}
        <Route path="/The-Power-of-Reading-How-Books-Shape-Our-Lives" element={<Article_detail_1/>}></Route>
        

        {/* Admin Page */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/products" element={<Products />} />
        <Route path="/admin/articles" element={<Articles />} />
        <Route path="/admin/transactions" element={<Transactions />} />
        <Route path="/admin/users" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;
