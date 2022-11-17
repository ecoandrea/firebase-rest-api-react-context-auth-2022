import { Outlet, Navigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const LayoutPrivate = () => {
  const { user, loading } = useUserContext();
  console.log("LayoutPrivate USER:", user); //null si hacemos el refresh F5

  if (loading) {
    return <p>Loading user ... </p>;
  }

  return <> {user ? <Outlet /> : <Navigate to="/" />}</>;
};

export default LayoutPrivate;
