import React from 'react';

const Register = () => {
    return (
        <div className='flex justify-center'>
            <div className="card bg-base-300 w-full max-w-sm shrink-0 shadow-2xl">
            <div className='text-center'><h1>Register Now</h1></div>
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
        </div>
    );
};

export default Register;