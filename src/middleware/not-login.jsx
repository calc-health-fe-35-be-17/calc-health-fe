import { Navigate } from 'react-router-dom';
const NotLogin = ({ isLogin, children }) => {
  if (!isLogin && !localStorage.getItem('token')) {
    console.log(!isLogin);
    return <Navigate to="/login" />;
  }

  return children;
};
export default NotLogin;
