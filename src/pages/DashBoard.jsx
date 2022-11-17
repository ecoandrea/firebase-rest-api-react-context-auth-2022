import { useUserContext } from "../context/UserContext";

const DashBoard = () => {
  const { token } = useUserContext();
  return (
    <>
      <h1>Dashboard</h1>
      <h2>Shhhhh: {token}</h2>
    </>
  );
};

export default DashBoard;
