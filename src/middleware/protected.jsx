import { Navigate } from 'react-router-dom';
const Protected = ({ isLogin, children }) => {
  // console.log(isLogin);
  if (isLogin && localStorage.getItem('token')) {
    return <Navigate to="/" replace />;
  }

  return children;
};
export default Protected;
