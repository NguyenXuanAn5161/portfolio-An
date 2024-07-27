import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Layout = (props) => {
  return (
    <>
      <Header />
      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
