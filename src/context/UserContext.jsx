import { createContext, useContext, useEffect, useState } from "react";
import { loginUser, refreshToken } from "../api/apiAuth";

export const UserContext = createContext();

const initialLoading = sessionStorage.getItem("refreshToken") && true;

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(initialLoading);
  const [token, setToken] = useState(null);

  console.log({ loading });

  useEffect(() => {
    if (sessionStorage.getItem("refreshToken")) {
      setLoading(true);
      refreshToken(sessionStorage.getItem("refreshToken"))
        .then((data) => {
          console.log(data);
          setToken(data.id_token);
          setUser(true);
        })
        .finally(() => setLoading(false));
    }
  }, []);

  const accessUser = async ({ email, password }) => {
    setLoading(true);
    try {
      // Envío email y contraseña al servidor (Firebase)
      const data = await loginUser({
        email: email,
        password: password,
      });
      // data: {token y refreshToken}
      setUser(true);
      console.log(data);
      sessionStorage.setItem("refreshToken", data.refreshToken);
      setToken(data.idToken);
    } catch (error) {
      console.log(error);
      setUser(false);
    } finally {
      setLoading(false);
    }
  };

  const destroyUser = () => {
    setUser(null);
    sessionStorage.removeItem("refreshToken");
    setToken(null);
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, accessUser, loading, destroyUser, token }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

export const useUserContext = () => useContext(UserContext);
