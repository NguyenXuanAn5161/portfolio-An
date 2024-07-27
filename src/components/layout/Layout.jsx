import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Layout = (props) => {
  return (
    <div className="container">
      <Header />
      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
