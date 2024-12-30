import React from 'react';
import { useContext } from 'react';
import { authcontext } from '../Porvider/Authprovider';
import { data } from 'react-router-dom';

const Signup = () => {
   
   const {siGninuser,setuser}  = useContext(authcontext)
   const handlesignin = (e) =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

siGninuser(email,password)
.then(result =>{
    console.log(result.user);

const lastsignintime = result?.user?.metadata?.lastSignInTime;
const logininfo = {email,lastsignintime}



fetch('http://localhost:5000/alluseremail',{
    method : 'PATCH',
    headers :{
        'content-type' : 'application/json'
    },
    body : JSON.stringify(logininfo)
})
.then(res => res.json())
.then(data => console.log('sign in info update in db',data))




    setuser(result)
})
.catch(error =>{
    console.log(error);
    
})



   }
   


    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handlesignin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
    );
};

export default Signup;