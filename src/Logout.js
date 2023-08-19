// Logout.js

import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Logout() {
  const history = useHistory();

  useEffect(() => {
    // Clear session storage and redirect to the login page
    sessionStorage.clear();
    history.push('/login');
  }, [history]);

  return (
    <div>
      <h2>Logging out...</h2>
    </div>
  );
}

export default Logout;
