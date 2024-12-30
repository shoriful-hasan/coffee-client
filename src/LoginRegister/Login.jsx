import React, { useContext } from 'react';
import { authcontext } from '../Porvider/Authprovider';
import { data } from 'react-router-dom';

const Login = () => {

const {createuser,setuser,user} = useContext(authcontext)

const handlecreateuser = (e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    console.log(email,password);
   
    createuser(email,password)
    .then(result => {
        console.log(result.user);

       const cratedat = result?.user?.metadata?.creationTime;

        setuser(result.user)
        const useremailpass = {
          email,
          name,
          cratedat
      }


      fetch('http://localhost:5000/useremail',{
        method : 'POST',
        headers :{'content-type' : 'application/json'},
        body : JSON.stringify(useremailpass)
    })
    
    .then(res => res.json())
    .then(data =>console.log(data))


        
    })

   

    .catch(error => {
        console.log(error.message);
        
    })

   



// send data in the server



}




    return (
        <div className='flex justify-center border '>
            
         <div className="card bg-base-300 p-5 w-full text-center max-w-sm shrink-0 shadow-2xl">
            <p>{user.email}</p>
         <div><h2>Login Now</h2></div>
      <form onSubmit={handlecreateuser} className="card-body">

      <div className="form-control">
          <label className="label">
            <span className="label-text">name</span>
          </label>
          <input type="text" placeholder="name" name='name' className="input input-bordered" required />
        </div>







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
        </div>
    );
};

export default Login;