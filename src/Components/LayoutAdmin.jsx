import "../App.css";
import Sidebar from "./Sidebar";

const LayoutAdmin = ({ children }) => {
  return (
    <div >
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export default LayoutAdmin;
