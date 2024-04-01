import React, { useEffect } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../state/auth/authSlice";
import LoginForm from "../../components/login/LoginForm";
import routes from "../../shared/constants/routes";

const { home } = routes;

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.user);
  useEffect(() => {
    if (currentUser) {
      console.log("currentUser", currentUser);
      navigate(home);
    }
  }, [currentUser, navigate]);

  const handleLogin = async (credentials) => {
    try {
      await dispatch(signIn(credentials)).unwrap();
      navigate(home);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="loginFormContainer">
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}

export default LoginPage;
