import React from 'react'
import '../../style/ForgotPassword.css'
import image from '../../images/Login-Logo.png'
import { FaEnvelope, FaLock } from "react-icons/fa";
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import $ from 'jquery';
 
const ForgetPassword=()=>
{
   
    const [supplierid, setsupplierid] = useState()
    const [otppwd, setotppwd] = useState()

    const [Data,setData]=useState({
        "supplierid": '',
        "otppwd":'',
        "passcode":''
    });
    
    
    function getotp(e)
    {
      $("#overlay").fadeIn('slow');
        e.preventDefault();
        console.log(Data)

        axios({
            method: 'post',
            url: 'http://localhost:1010/api/login/service/forgotpwd?supplierId='+Data["supplierid"],
           // headers: {Authorization: `Bearer ${bearerToken}`},
            data: Data,
          })
            .then(function (response) {
              $("#overlay").fadeOut('slow');
             //  console.log("response", JSON.stringify(response.data))
             console.log("response", response.data.message);
             if ( response.data =="SUCCESS") {
               // window.location = "/Setpassword";
               document.getElementById( 'otpfield' ).style.display = 'block';
               document.getElementById( 'otpverifybutton' ).style.display = 'block';
               document.getElementById("msg").textContent += "OTP Successfully Sent!";
              } 
              else
               {
                document.getElementById("error").textContent += "Invalid Credentials or You already change the password.";
              }
            })
            .catch(function (error) {
              console.log('error', error);
            });

       
    }

    function verifyotp(e)
    {
      $("#overlay").fadeIn('slow');
        e.preventDefault();
        console.log(Data)

        axios({
            method: 'post',
            url: 'http://localhost:1010/api/login/service/validateOtp?otp='+Data["otppwd"]+'&supplierId='+Data["supplierid"],
           // headers: {Authorization: `Bearer ${bearerToken}`},
            data: Data,
          })
            .then(function (response) {
              $("#overlay").fadeOut('slow');
             //  console.log("response", JSON.stringify(response.data))
             console.log("response", response.data);
             if ( response.data == true) {
                document.getElementById("error").innerHTML = "";
                document.getElementById("msg").innerHTML = "OTP Successfully Verfied!";
               // window.location = "/Setpassword";
               document.getElementById("otpverfication_block").style.display = "none";
               document.getElementById("setpassword_block").style.display = "block";
            
              } 
              else
               {
                document.getElementById("msg").innerHTML = "";
                document.getElementById("error").innerHTML = "OTP is wrong!";
              }
            })
            .catch(function (error) {
              console.log('error', error);
            });

       
    }
    function setpasswordfun(e)
    {
      $("#overlay").fadeIn('slow');
       console.log(Data);
        e.preventDefault();
        axios({
            method: 'post',
            url: 'http://localhost:1010/api/login/service/setNewPassword?password='+Data["passcode"]+'&supplierId='+Data["supplierid"],
            data:Data,
        })
        .then(function (response) {
            if ( response.data == true) {
              $("#overlay").fadeOut('slow');
             //  window.location = "/SubsLogin";
             document.getElementById("msg").innerHTML = "Password Successfully Updated";
              window.location = "/passwordchanged";
             } else {
               //  block of code to be executed if the condition is false
               document.getElementById("error").innerHTML = "Password Updatation Failed";
             }
           })
           .catch(function (error) {
             console.log('error', error);
           });
    }

  

    const handleChange=(event)=>{
        const{name,value}=event.target;
        setData((prevData)=>({
            ...prevData,
            [name]:value,
        
        }));
    };

    const handleSubmit=(event)=>{
        event.preventDefault();
      };
    
  console.log(Data);
    
  return (
    <div class='fp-container'>
        <div class='fp-logo-box'>
            <img src={image} alt='KPMG_logo'/>
        </div>
        <div class='fp-form-box'>
            <form class='fp-form'>
                <h3>Supplier Portal</h3>
                 <span id="msg"></span>
                 <span id="error"></span>
            <div id='otpverfication_block'>
                <div class='fp-inputfields'>
                    {<FaEnvelope className='Ricons'/>}
                    <input type='text' name="supplierid" value={Data.supplierid} onChange={handleChange} placeholder='Enter Supplier ID'/>
                </div>
                
                <a onClick={getotp} id="getotp" class="getotp" href='#'>Get OTP</a>
                <br/><br/>

                <div class='fp-inputfields hidden' id="otpfield">
                    <input  type='text' name="otppwd" value={Data.otppwd} onChange={handleChange} placeholder='Enter OTP'/>
                </div>

                <button id="otpverifybutton" class='fp-btn' onClick={verifyotp}>Verify</button>

                <div class='fp-links'>
                    New User ? <a href='./Registration' class='fp-smallLinks'>Click here</a><br/>
                    <a href='' class='smallLinks'>Continue Registration</a>

                </div>

            </div>

            <div id='setpassword_block'>
            <div className='setpassword_id'>{<FaEnvelope className='Ricons'/>} 1234</div>  
                     
                          
                     {/* <input type='hidden' class="Login-input" name="supplierId"   value="1234" required/><br/> */}
                
                 <div class='login-inputfields'>
                     {<FaLock className='Ricons'/>}
                     <input type='password' class="Login-input" onChange={handleChange} name="passcode" placeholder='Enter New Password' required/><br/>
                 </div>
                 <div class='login-inputfields'>
                     {<FaLock className='Ricons'/>}
                     <input type='password' class="Login-input" name="temp_password2"  placeholder='Confirm Password' required/><br/>
                 </div>

     
                 
                 <button onClick={setpasswordfun} class='login-btn' >Submit</button>
            </div>

            </form>
        </div>
    </div>     
)
};

export default ForgetPassword;