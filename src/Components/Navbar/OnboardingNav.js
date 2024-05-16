import React from 'react'
import logo from '../../images/KPMG-logo.jpg'
import '../../style/OnboardingNav.css'
import {FaPowerOff,FaInfoCircle} from "react-icons/fa";

function OnboardingNav() {
  return (
    <div class='OnboardingNav-container'>
        <div class='OnboardingNav-topline'>
            <div class='OnboardingNav-heading'>
                <p>Supplier Portal</p>
            </div>
            <div class='OnboardingNav-logo-box'>
                <img src={logo} alt='KPMG_logo' class='OnboardingNav-logo'/>
            </div>
            <div class='OnboardingNav-component'>
                <div class='OnboardingNav-component-content'>
                    <div class='OnboardingNav-component-Logout'>
                        {<FaPowerOff className='OnboardingNav-Ricons'/>}
                        <a class='OnboardingNav-component-a'>Logout</a>
                    </div>
                    <div class='OnboardingNav-component-About'>
                        {<FaInfoCircle className='OnboardingNav-Ricons'/>}
                        <a class='OnboardingNav-component-a'>About</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OnboardingNav