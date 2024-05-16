import React, { useState } from "react";
import "../../style/Registration.css";
import image from "../../images/Login-Logo.png";
import { FaEnvelope, FaUserAlt, FaPhone, FaMobileAlt } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import $ from 'jquery';
 
const Registration=()=>
{
  let navigate = useNavigate();
  const pathCompute = `/ChangePassword`
 
    const [supplierName, setsupplierName] = useState()
    const [password, setpassword] = useState()

    const [Data,setData]=useState({
        "supplierId": '',
        "supplierName": '',
        "emailId": '',
        "landlineNum": '',
        "phoneNum": '',
    });

    
    function getRegisterd(e)
    {
      $("#overlay").fadeIn('slow');
      console.log(Data);
        e.preventDefault();
        axios({
            method: 'post',
            url: "http://localhost:1010/api/login/service/register",
            data:Data,
        })
        .then(function (response) {
          $("#overlay").fadeOut('slow');
              console.log("response", JSON.stringify(response.data))
            console.log("response", response.data);
            if (response.data) {
               localStorage.setItem("reg_id", response.data);
               window.location = "/RegistrationID";

             } else {
               //  block of code to be executed if the condition is false
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

    const isFormValid=()=>{
      return Object.values(Data).every((value)=>value.trim()!=="");
    }
    return (
        <div class="reg-container">
          <div class="reg-logo-box">
            <img src={image} alt="KPMG_logo" />
          </div>
          
          <div class="reg-form-box">
            <form class="reg-form">
              <h3>New Registration</h3>

              <div class="reg-inputfields">
                {<FaUserAlt className="Ricons" />}
                <input type="text" name="supplierId" placeholder="Supplier ID" onChange={handleChange} />
                <br />
              </div>
    
              <div class="reg-inputfields">
                {<FaUserAlt className="Ricons" />}
                <input type="text" name="supplierName" placeholder="Supplier Name" onChange={handleChange} />
                <br />
              </div>
    
              <div class="reg-inputfields">
                {<FaEnvelope className="Ricons" />}
                <input type="email" name="emailId"  placeholder="Email ID" onChange={handleChange} />
                <br />
              </div>
    
              <div class="reg-inputfields">
                {<FaPhone className="Ricons" />}
                <input type="text" name="landlineNum"  placeholder="Landline Number" onChange={handleChange}  />
                <br />
              </div>
    
              <div class="reg-inputfields">
                {<FaMobileAlt className="Ricons" />}
                <input type="text" name="phoneNum" onChange={handleChange}  placeholder="Phone Number" />
                <br />
              </div>
    
              <div class="reg-checkboxdiv">
                <input type="checkbox" class="reg-chkbox" />
    
                <lable>
                  I agree to the{" "}
                  <a href="./Registration" class="smallLinks">
                    terms and conditions
                  </a>
                </lable>
                <br />
              </div>
    
              <button class="reg-btn"  onClick={getRegisterd} disabled={!isFormValid()}>
                Next{" "}
              </button>
    
              <div class="reg-links">
                Already have an account ?{" "}
                <a href="/subsLogin" class="smallLinks">
                  Click here
                </a>
                <br />
              </div>
            </form>
          </div>
        </div>
      );
};

export default Registration;