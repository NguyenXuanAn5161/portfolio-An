import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./layout.scss";

const Layout = (props) => {
  return (
    <div className="wrapper_layout">
      <Header />
      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <div className="container c__outlet">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
