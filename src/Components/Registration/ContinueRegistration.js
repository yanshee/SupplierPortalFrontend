import React, { useState } from 'react'
import "../../style/Registration.css";
import image from '../../images/Login-Logo.png'
import { FaEnvelope, FaLock } from "react-icons/fa";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import $ from 'jquery';
 
const ContinueRegistration=()=>
{
    let navigate = useNavigate();
    const [registrationid, setregistrationid] = useState()
    const [otppwd, setotppwd] = useState()
 
    const [Data,setData]=useState({
        "registrationid": '',
        "otppwd":'',
        "supplierId":''
    });
   
   
   
    function enterregistrationid(e)
    {
 
        $("#overlay").fadeIn('slow');
       console.log(Data);
        e.preventDefault();
        axios({
            method: 'get',
            url: 'http://localhost:1010/api/login/service/continueRegistration?registrationId='+Data['registrationid'],
            data:Data,
        })
        .then(function (response) {
 
            $("#overlay").fadeOut('slow');
            if ( response.data) {
             //  window.location = "/SubsLogin";
             document.getElementById("msg").innerHTML = "OTP has been sent your registered email id";
             document.getElementById( 'otpfield' ).style.display = 'block';
             document.getElementById( 'submit_enterregistrationid' ).style.display = 'none';
             document.getElementById( 'submit_validateOtpContinueReg' ).style.display = 'block';
 
           
             //document.getElementById('overlay').fadeOut(300);
             // window.location = "/passwordchanged";
             } else {
               //  block of code to be executed if the condition is false
               document.getElementById("error").innerHTML = "Wrong Registration Id";
             }
           })
           .catch(function (error) {
             console.log('error', error);
           });
    }
    function validateOtpContinueReg(e)
    {
        $("#overlay").fadeIn('slow');
       console.log(Data);
        e.preventDefault();
        axios({
            method: 'post',
            url: 'http://localhost:1010/api/login/service/validateOtpContinueReg?otp='+Data["otppwd"]+'&registrationId='+Data["registrationid"],
            data:Data,
        })
        .then(function (response) {
            $("#overlay").fadeOut('slow');
            if ( response.data['otpValidationStatus']== "true") {
 
                if(response.data['onboardingStatus']== "IN-PROGRESS" && response.data['onboardingMsg'])
                {
                    localStorage.setItem("onboarding_msg", response.data['onboardingMsg']);
                    window.location = "/OnboardingSubmission";
                }
                else if ( response.data['onboardingStatus']== "IN-PROGRESS")
                {
                    localStorage.removeItem("onboarding_msg");
                    window.location = "/OnboardingSubmission";
                }
               
                if ( response.data['onboardingStatus']== "COMPLETED") {
                    window.location = "/umlogin";
                    // otp not generating, it says onboarding completed
                 }
 
                 if ( response.data['onboardingStatus']== "IN-ACTIVE") {
                    window.location = "/onboarding";
                 }
               
           
           
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
            <div id='registration_block'>
                <div class='fp-inputfields'>
                    {<FaEnvelope className='Ricons'/>}
                    <input type='text' name="registrationid" value={Data.supplierid} onChange={handleChange} placeholder='Enter Registraion ID'/>
                </div>
               
               
            </div>
 
            <div id='otp_block'>
           
                <div class='fp-inputfields' id="otpfield">
                    <input  type='text' name="otppwd" value={Data.otppwd} onChange={handleChange} placeholder='Enter OTP'/>
                </div>  
           
            </div>
 
            <button id="submit_enterregistrationid" onClick={enterregistrationid} class='login-btn' >Submit</button>
           
            <button id="submit_validateOtpContinueReg" onClick={validateOtpContinueReg} class='login-btn' >Verify OTP</button>
            <button id="submit_ContinueApplication" onClick={()=>navigate(`/onboarding`)} class='login-btn' >Continue Application</button>
            <div class='login-links'>
                            Not Registered? <a href='./Registration' class='login-smallLinks'>Click here</a><br/>
                            <a href='/Registration' class='login-smallLinks'>Register</a>
                        </div>
           
 
            </form>
        </div>
    </div>    
)
};
 
export default ContinueRegistration;