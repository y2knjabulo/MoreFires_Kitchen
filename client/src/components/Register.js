import React from 'react';

const Register = () => {
  return (
    <div className="container mt-4">
      <h2>Register</h2>
      <form>
        <input type="text" placeholder="Name" className="form-control mb-2" />
        <input type="email" placeholder="Email" className="form-control mb-2" />
        <input type="password" placeholder="Password" className="form-control mb-2" />
        <button className="btn btn-success">Sign Up</button>
      </form>
    </div>
  );
};

export default Register;
