import React, { useState } from "react";
import '../Login/Login.css';
export default function Login() {
  const [logincredentials,updatelogincrendials]=useState({})


  function capturelogininput(event){

    console.log(event.target.value)
    const name=event.target.name;
    const value=event.target.value;
    updatelogincrendials(previousstate =>({
      ...previousstate,[name]:value
    }))
   
  }
  function login(){

    console.log("logincredentials",logincredentials)
  }
    return (
        <>
       <div className="container-fluid custom-containerlogin">
       <div className="d-flex justify-content-center card-position">
        <div className="card customlogin-card ">
            <div className="card-title text-center"><h2>Login</h2></div>
                <div className="card-body">
                <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email"  name="Email" class="form-control custom-input-signup" id="exampleInputEmail1" aria-describedby="emailHelp"onChange={capturelogininput}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" name="Password" class="form-control custom-input-signup" id="exampleInputPassword1" onChange={capturelogininput}/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input custom-input-signup" id="exampleCheck1" onChange={capturelogininput}/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button  class="btn customlogin-buttom" onClick={login}>Submit</button>
</form>
                </div>
            </div>
        </div>     
       </div>
        </>
    )
}