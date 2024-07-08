import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialUser = () => {
  const item = localStorage.getItem(import.meta.env.VITE_USER_INFO);
  return item ? JSON.parse(item) : null;
};

const initialRole = () => {
  const item = localStorage.getItem(import.meta.env.VITE_USER_INFO);
  if (item) {
    let work = JSON.parse(item);
    return work[import.meta.env.VITE_USER_ROLE] == "user" ? true : false;
  }
  return false;
};

const initialIsAuth = () => {
  const item = localStorage.getItem(import.meta.env.VITE_USER_TOKEN);
  return item ? true : false;
};

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: initialUser(),
    isAuth: initialIsAuth(),
    isAdmin: initialRole(),
  },
  reducers: {
    handleLogin: (state, action) => {
      let token = action.payload.token;
      console.log("action", action.payload);
      const userType = action.payload.role == "admin" ? "admin" : "user";
      let user = {
        id: action.payload.data.user._id,

        name: action.payload.data.user.username,
        email: action.payload.data.user.email,
        [import.meta.env.VITE_USER_ROLE]: userType,
      };
      localStorage.setItem(import.meta.env.VITE_USER_TOKEN, token);
      localStorage.setItem(
        import.meta.env.VITE_USER_INFO,
        JSON.stringify(user)
      );
      state.isAuth = true;
      state.user = user;
      console.log("user", state.user);
      state.isUser = action.payload.role == "user";
      toast.success("Logged in successfully");
    },
    handleLogout: (state, action) => {
      localStorage.removeItem(import.meta.env.VITE_USER_TOKEN);
      localStorage.removeItem(import.meta.env.VITE_USER_INFO);
      state.isAuth = false;
      state.user = null;
      toast.success("User logged out successfully");
    },
  },
});

export const { handleLogin, handleLogout } = authSlice.actions;
export default authSlice.reducer;
