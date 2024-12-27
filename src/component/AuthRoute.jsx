import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./Navbar";
function AuthRoute({ element: Element, ...rest }) {
  return (
    <div>
      <Navbar>
        <Element {...rest} />
      </Navbar>
    </div>
  );
}

export default AuthRoute;
