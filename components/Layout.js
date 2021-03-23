import Footer from "./Footer";
import Meta from "../components/Meta";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <div className="content">
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
