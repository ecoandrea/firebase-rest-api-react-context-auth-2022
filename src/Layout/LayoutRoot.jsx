import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const LayoutRoot = () => {
  return (
    <>
      <Navbar />
      <main className="container">
        <Outlet />
      </main>

      <p className="container">Footer</p>
    </>
  );
};

export default LayoutRoot;
