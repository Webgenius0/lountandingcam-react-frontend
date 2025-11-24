import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
    const userToken = useSelector((state) => state?.userData?.value);
  const location = useLocation();
  // const localUserData = localStorage.getItem("LG_userData");
  // const localAccessToken = localStorage.getItem("LG_AccessToken");

  if (!userToken) {
    return (
      <Navigate
        to="/auth/sign-in"
        state={{ from: location.pathname }}
        replace
      />
    );
  }

  return children;
};

export default PrivateRoute;
