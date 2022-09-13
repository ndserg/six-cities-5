import React from "react";
import {Navigate} from 'react-router-dom';
import {AuthorizationStatus} from '../../const';
import PropTypes from "prop-types";

export default function PrivateRoute(props) {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={`/login`} />
  );
}

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
