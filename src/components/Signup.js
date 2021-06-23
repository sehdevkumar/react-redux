import React,{useState,useEffect} from "react";
import Loader from "./Loaders/Loader";
import Error from "./Errors/Error";
import {useHistory} from 'react-router-dom'


function Signup() {
     
     const  history = useHistory('')
     const [getLoader, setLoader] = useState(false)
     const [getError, setError] = useState(false);
     const [getFileError,setFileError] = useState("")
    
     


     const [getUser, setUser] = useState({
       name: "",
       email: "",
       password: "",
       confirm_password: "",
       file: "https://www.computerhope.com/jargon/g/guest-user.jpg",
     });

   

    const fileHandler = (e)=>{
        const filename = e.target.files[0]
        
        try{
        const data = new FormData()
        data.append("file",filename);
        data.append("upload_preset", "react-redux");
        data.append("cloud_name", "dovrncno9");
        fetch("https://api.cloudinary.com/v1_1/dovrncno9/image/upload",
        {
          method:"POST",
          body:data
        }).then(res=>res.json())
        .then(result=>setUser({...getUser,file:result.url.toString()}))
        .catch((err)=>{console.log(err)})
      }catch(err){
        console.log(err)
      }

    }

    const handler = (e)=>{
        setUser({
            ...getUser,
            [e.target.name]:e.target.value
        })
    }

   const submitHandler = async(e)=>{
     
       e.preventDefault()
        
        setLoader(true);
        if(getUser.password!==getUser.confirm_password){
             setError("Password Not Matched!");
             setLoader(false);
             return;
        }

        try {
          setLoader(true);
          const response = await fetch("http://localhost:5000/api/createuser", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(getUser)
          });

          if (response.status===200) {
            const data = await response.json();
            console.log(data);
            localStorage.setItem("token-user", JSON.stringify(data));
            setLoader(false);
             history.push("/");
            
          } else {
            const data = await response.json();
            console.log(data);
            setError(data.error);
            setLoader(false);
          }
        } catch (error) {
          console.log(error);
          setLoader(false);
        }
   }

  return (
    <>
      <center>
        <h2 className="mt-4">SignUp</h2>
      </center>
      <div className="container mt-4">
        {getError && <Error error={getError} />}
        {getLoader && <Loader />}
        <form>
          <div className="form-row mt-4">
            <div className="col">
              <input
                value={getUser.name}
                onChange={handler}
                name="name"
                type="text"
                className="form-control"
                placeholder="Name"
              />
            </div>
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
            <div className="col">
              <input
                value={getUser.confirm_password}
                onChange={handler}
                name="confirm_password"
                type="password"
                className="form-control"
                placeholder="Confirm Password"
              />
            </div>
          </div>

          <div className="form-row mt-4">
            <div className="col">
              <input type="file" onChange={fileHandler} name="file" />
            </div>
            <div className="col">
              <button
                onClick={submitHandler}
                className="btn button-transparent btn-success"
              >
                SignUp
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signup;
