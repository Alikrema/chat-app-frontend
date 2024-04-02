import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser, clearUser, setLoading } from "../../state/auth/authSlice";

const AuthStateListener = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Simulate checking local storage or an API call to validate session
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const user = JSON.parse(storedUser);
      dispatch(setUser(user));
    } else {
      dispatch(clearUser());
    }

    // Set loading to false after checking the auth state
    dispatch(setLoading(false));
  }, [dispatch]);

  return children;
};

export default AuthStateListener;
