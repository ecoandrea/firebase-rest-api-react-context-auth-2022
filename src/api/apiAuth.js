import axios from "axios";

export const createUser = async ({ email, password }) => {
  const { data } = await axios.post(
    `${import.meta.env.VITE_AUTH_URL}/accounts:signUp?key=${
      import.meta.env.VITE_API_KEY_WEB
    }`,
    {
      email,
      password,
      returnSecureToken: true,
    }
  );
  return data;
};

export const loginUser = async ({ email, password }) => {
  const { data } = await axios.post(
    `${import.meta.env.VITE_AUTH_URL}/accounts:signInWithPassword?key=${
      import.meta.env.VITE_API_KEY_WEB
    }`,
    {
      email,
      password,
      returnSecureToken: true,
    }
  );
  return data;
};

export const refreshToken = async (refreshToken) => {
  const { data } = await axios.post(
    `https://securetoken.googleapis.com/v1/token?key=${
      import.meta.env.VITE_API_KEY_WEB
    }`,
    {
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }
  );
  return data;
};
