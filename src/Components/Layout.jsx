import Navbar from "./Navbar";
import Footer from "./Footer";
import "../App.css";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
