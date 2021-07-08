import React, { useEffect } from "react";
import { connect } from "react-redux";

import { userLogin } from "../actions/auth";
import { useHistory } from "react-router-dom";

function Login({ auth, userLogin }) {
  const history = useHistory();

  useEffect(() => {
    if (auth.isAuthenticated) {
      history.push("/");
    }
  }, [auth.isAuthenticated, history]);

  return (
    <>
      <h1>Login Component</h1>
      <button onClick={userLogin}>Login</button>
    </>
  );
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps, { userLogin })(Login);