import React, { useState,useEffect } from "react";
import Loader from "./Loaders/Loader";
import LoginError from "./Errors/Error";
import {useHistory} from 'react-router-dom'
;

function Signin() {

  const history = useHistory()

  const [getUser, setUser] = useState({
    email: "",
    password: "",
  });
  
  const [getLoader,setLoader] = useState(false)
  const [getError, setError] = useState(false)
   
  const handler = (e) => {
    setUser({
      ...getUser,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async(e) => {
    e.preventDefault();
    
    try {
        
        setLoader(true)
        const response = await fetch("http://localhost:5000/api/loginuser",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(getUser)
        });
        
        if(response.status==200){
             const data = await response.json();
             console.log(data);
             localStorage.setItem("token-user",JSON.stringify(data))
             setLoader(false)
          
             history.push('/')
        }else{
             const data = await response.json();
             console.log(data);
             setError(data.error)
             setLoader(false)
        }


       

    } catch (error) {
        console.log(error);
        setLoader(false);
    }



  };

  return (
    <>
      <center>
        <h2 className="mt-4">SignIn</h2>
      </center>

       <div className="container mt-4">
           {getError && <LoginError error={getError}/>}
          {getLoader && <Loader />}
        <form>
          <div className="form-row mt-4">
            
            <div className="col">
              <input
                value={getUser.email}
                onChange={handler}
                name="email"
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="form-row mt-4">
            <div className="col">
              <input
                value={getUser.password}
                onChange={handler}
                name="password"
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="form-row mt-4">
            <div className="col">
              <button
                onClick={submitHandler}
                className="btn button-transparent btn-primary"
              >
                SignIn
              </button>
            </div>
            <div className="col"></div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signin;
