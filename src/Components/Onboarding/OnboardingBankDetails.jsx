import React, { useState } from 'react'
import '../../style/OnboardingBankDetails.css'
import OnboardingNav from '../Navbar/OnboardingNav';
import { FaArrowLeft } from "react-icons/fa";
import { Step, ProgressBar } from "react-step-progress-bar"
import "react-step-progress-bar/styles.css";
import '../../style/Stepper.css'

const OnboardingBankDetails=({ prevStep, nextStep, handleChange, values })=>
{
    const Continue = e => {
        e.preventDefault();
        nextStep();
      }
    
      const Previous = e => {
        e.preventDefault();
        prevStep();
      }

    return (
        <div>
            <div class='OnboardingMain-container'>
            <OnboardingNav/>
            <ProgressBar percent={70} filledBackground="#00338E" className="Onboarding-ProgressBar">
                <Step transition="scale">
                {({ accomplished }) => (
                    <div className={`indexedStep ${accomplished ? "accomplished" : null}`} >
                        Business Information
                    </div>
                )} 
                </Step>
                <Step transition="scale">
                {({ accomplished }) => (
                    <div className={`indexedStep ${accomplished ? "accomplished" : null}`} >
                        Document Upload
                    </div>
                )} 
                </Step>
                <Step transition="scale">
                {({ accomplished }) => (
                    <div className={`indexedStep ${accomplished ? "accomplished" : null}`} >
                        Bank Details
                    </div>
                )} 
                </Step>
                <Step transition="scale">
                {({ accomplished }) => (
                    <div className={`indexedStep ${accomplished ? "accomplished" : null}`} >
                        Summary
                    </div>
                )} 
                </Step>
            </ProgressBar>
            <div class='OBBD-backBtn-container'>
                <a href='/OnboardingDoc' className='OBOBDoc-backBtn' onClick={Previous}> <i>{<FaArrowLeft/>}</i>  Back </a>
            </div><br/>
            <div className='OBBD-Title'>
                <label>Bank Details</label>
            </div>
            <form className='OBBD-form-box'>
                <div className='OBBD-form-left-pane'>
                    <div class='OBBD-form-items-row'>
                        <label>IFSC Code</label> <br/>
                        <input name='BankIFCScode' onChange={handleChange('BankIFCScode')} defaultValue={values.BankIFCScode}/>
                    </div>
                    <div class='OBBD-form-items-row'>
                        <label>City</label><br/>
                        <input name='BankCity' onChange={handleChange('BankCity')} defaultValue={values.BankCity}/>
                    </div>
                    <div class='OBBD-form-items-row'>
                        <label>State</label><br/>
                        <input name='BankState' onChange={handleChange('BankState')} defaultValue={values.BankState}/>
                    </div>
                    <div class='OBBD-form-items-row'>
                        <label>Branch Name</label><br/>
                        <input name='BankBranchName' onChange={handleChange('BankBranchName')} defaultValue={values.BankBranchName}/>
                    </div>
                </div>

                <div className='OBBD-form-right-pane'>
                    <div class='OBBD-form-items-row'>
                        <label>Account Number</label> <br/>
                        <input name='BankAccountNumber' onChange={handleChange('BankAccountNumber')} defaultValue={values.BankAccountNumber}/>
                    </div>
                    <div class='OBBD-form-items-row'>
                        <label>Bank Name</label><br/>
                        <input name='BankName' onChange={handleChange('BankName')} defaultValue={values.BankName}/>
                    </div>
                    <div class='OBBD-form-items-row'>
                        <label>Payment Mode</label><br/>
                        <select className='OBBD-form-select' name='PaymentMode' onChange={handleChange('PaymentMode')} defaultValue={values.PaymentMode}>
                            <option value=''>--Select--</option>
                            <option value='RTGS'>RTGS</option>
                            <option value='NEFT'>NEFT</option>
                            <option value='IMPS'>IMPS</option>
                        </select>
                    </div>
                </div>
            </form>
            <br/>
            <button className='OB-next-btn' onClick={Continue}>Next</button>
            </div>
        </div>
    )
};

export default OnboardingBankDetails;