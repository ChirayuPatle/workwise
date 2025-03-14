import { Outlet } from "react-router-dom";
import Header from "./components/reusable/header";
import Footer from "./components/reusable/footer";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
