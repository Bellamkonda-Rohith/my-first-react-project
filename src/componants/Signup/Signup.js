import React from "react";
import "../Signup/Signup.css"
export default function Signup() {
    return (
        <>
            <div className="container-fluid custom-signupcontainer">
                <div className="card customsignup-card">
                    <div className="card-title text-center h3"> Signup

                    </div>
                    <div className="card-body">

                        <form>
                            <div class="mb-3">

                                <input type="Full Name" class="form-control" aria-describedby="emailHelp" placeholder="FullName" />
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">

                                <input type="Eamil" class="form-control" placeholder="Email" />
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" class="btn btn-danger custom-buttonsihnup" >Create Account</button>
                        </form>
                        <p className="text-center mt-3">or</p>
                        <button class="btn btn-danger custom-buttonsihnup">Signup with Goole</button>
                    </div>
                </div>

            </div>
        </>
    );
};
