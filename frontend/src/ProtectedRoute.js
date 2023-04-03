import React from 'react';
import { Route, Redirect, useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, authenticated, ...rest }) => {
    const navigate = useNavigate();
    return (
      <Route {...rest} render={(props) => {
        if (authenticated === true) {
          return <Component {...props} />;
        } else {
          return navigate("/login");
        }
      }} />
    )
  };

  export default ProtectedRoute;
