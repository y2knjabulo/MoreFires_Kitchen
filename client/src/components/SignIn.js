import React from 'react';

const SignIn = () => {
  return (
    <div className="container mt-4">
      <h2>Sign In</h2>
      <form>
        <input type="email" placeholder="Email" className="form-control mb-2" />
        <input type="password" placeholder="Password" className="form-control mb-2" />
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default SignIn;
