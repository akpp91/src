import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Logout() {
  const history = useHistory();

  useEffect(() => {
    // Clear session storage and redirect to the home page
    sessionStorage.clear();
    history.push('/Home'); // Redirect to the home page
  }, [history]);

  return (
    <div>
      <h2>Logging out...</h2>
    </div>
  );
}

export default Logout;
