import {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";


function Loginu(){
    const naviget = useNavigate();
    const[user,setContact] =useState("");
    const[pass,setPass] =useState("");
    const[error,setError] =useState("");
    const[msg,setMsg] =useState("");


    useEffect(()=>
    {
        setTimeout(function(){
            setMsg(" ")
        },5000);
    },[msg]);

    const handleInputChange =(e,type)=>
        {
            switch(type){
                case "contact":
                setError("");
                setContact(e.target.value);
                if(e.target.value === ""){
                    setError ("Contact has left blank");
                }
                break;
                case "pass":
                    setError("");
                    setContact(e.target.value);
                    if(e.target.value === ""){
                        setError ("Password has left blank");
                    }
                    break;
                    default:

            }
        }
        function LoginSubmit(){
            if(contact!== ""&& pass!=""){
                var url = "http://localhost/React-php/login.php";
                var headers ={
                    "Accept":"application/json",
                    "Content-type":"application/json"
                };
                var Data = {
                    contact:contact,
                    password:password
                };
                fetch(url,{
                    method: "POST",
                    headers: headers,
                    body: JSON.stringify(Data)
                }).then((response)=> response.json())
                .then((response) => {
                    if(response[0].result === "Invalid Contact Number!" || response[0].result === "Invalid Password!"||){
                        setError(response[0].result);
                    }else{
                        setMsg(response[0].result);
                        setTimeout(function(){
                            naviget("/localhost/3000")
                        }, 5000);
                    }
                    
                }).catch((err)=>{
                    setError(err);
                    console.log(err);
                })
            }
            else {
                setError("All field are Required!")
            }
        }


    return(
        <div className="form">
            <p>
                {
                    error !=="" ?
                    <span className="error">{error}</span>:
                    <span className="success">{msg}</span>
                }
            </p>
            <label>Contact</label>
            <input 
            type="text"
            value={contact}
            onChange={(e) => handleInputChange(e,"contact")}
            ></input>
             <label>Password</label>
            <input 
            type="password"
            ></input>
            <label>
                Login
            </label>
            <input type="submit" defaultValue="Login" className="button" onClick={LoginSubmit}></input>


        </div>
    )
    


}
export default Loginu;