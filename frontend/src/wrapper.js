import React, { useState } from 'react';
import Login from './layouts/authentication/login';
import App from './App';

function Wrapper() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <div>
      <Login setAuthenticated={setAuthenticated} />
      <App authenticated={authenticated} />
    </div>
  );
}

export default Wrapper;
