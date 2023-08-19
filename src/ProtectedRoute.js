import { Route } from "react-router-dom"; // Import Route from the correct package
import React from "react"; // Don't forget to import React!
import Login from "./Login";

// Inside the ProtectedRoute component
function ProtectedRoute(props) {
  var isUserLoggedIn = sessionStorage.getItem('isUserLoggedIn');

  if (isUserLoggedIn != null && isUserLoggedIn === 'true') {
    // If logged in, return the expected component
    return <Route exact path={props.path} component={props.component} />;
  } else {
    // If not logged in, return the Login component
    return <Login path={props.path} />;
  }
}

export default ProtectedRoute;
