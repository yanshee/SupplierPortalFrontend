import React, { useState } from 'react'
import '../../style/RegistrationID.css'
import logo from '../../images/KPMGLogo.jpg'
import image from '../../images/Login-Logo.png'
import { FaEnvelope, FaLock } from "react-icons/fa";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

 
const RegistrationID=()=>
{
   

    
    function redirect(e)
    {
        e.preventDefault();

        if (localStorage.getItem("reg_id") === null) {
            window.location = "/continueregistration";
          }
          else
          {
            window.location = "/onboarding";
          }
        
    }

   
   
    
    
        return ( 
            <div class='regID-container'>
                <div class='regID-logo-box'>
                    <img src={image} alt='KPMG_logo'/>
                </div>
                <div class='reg-form-box'>
                    <form class='reg-form'>
                    <div class='KPMG-logo-box'>
                <img class="KPMG_Img" src={logo} alt='KPMG_logo'/>
            </div>
                        <div class='regID-msg'>
                            A Registration ID has been sent to your email.
                        </div>
                        <br/><br/><br/>
                        <div>
                            <button onClick={redirect} class='regID-btn'>Continue</button>
                        </div>
                    </form>
                </div>
            </div>
        )
};

export default RegistrationID;