import Navbar from "./components/navbar/Navbar";
import Singin from "./pages/Singin";
import Signup from "./pages/Signup";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import EmailVerification from "./components/auth/EmailVerification";
import ForgotPassword from "./components/auth/ForgotPassword";
import ConfirmPassword from "./components/auth/ConfirmPassword";

import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./redux/action";
import AdminNavigator from "./navigator/AdminNavigator";
import { useEffect } from "react";
import SingleMoviePage from "./components/singleMovie/SingleMoviePage";

const App = () => {
  const dispatch = useDispatch();

  const fetchUser = async () => {
    try {
      const result = await loadUser(localStorage.getItem("auth-token"));

      if (result?.data?.data) {
        dispatch({ type: "user", payload: result?.data?.data });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const { userDetails } = useSelector((state) => state.user);

  const isAdmin = userDetails?.role === "admin";

  if (isAdmin) return <AdminNavigator />;
  else {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/auth/signin" element={<Singin />} />
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/auth/verification" element={<EmailVerification />} />
          <Route path="/auth/forgot-password" element={<ForgotPassword />} />
          <Route path="/auth/confirm-password" element={<ConfirmPassword />} />
          <Route path="/movie/:movieId" element={<SingleMoviePage />} />
        </Routes>
      </>
    );
  }
};
export default App;
