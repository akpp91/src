import { Route } from "react-router-dom"; // Import Route from the correct package
import React from "react"; // Don't forget to import React!
import Login from "./Login";

// Inside the ProtectedRoute component

// Use ProtectedRoute when you want 
// to restrict access to certain routes to authenticated users 
// and redirect them to a login page if they are not logged in.

function ProtectedRoute(props) 
{
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
