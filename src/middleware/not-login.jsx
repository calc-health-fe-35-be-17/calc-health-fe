import { Navigate } from "react-router-dom";
const NotLogin = ({ isLogin, children }) => {

  if (!isLogin) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
export default NotLogin;