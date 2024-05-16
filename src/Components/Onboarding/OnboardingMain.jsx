import React, { useState } from 'react'
import '../../style/OnboardingMain.css'
import OnboardingNav from '../Navbar/OnboardingNav';
import { Step, ProgressBar } from "react-step-progress-bar"
import "react-step-progress-bar/styles.css";
import '../../style/Stepper.css'

const OnboardingMain=({ nextStep, handleChange, values })=>
{
    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

    return (
        <div class='OnboardingMain-container'>
            <OnboardingNav/>
            <ProgressBar percent={0} filledBackground="#00338E" className="Onboarding-ProgressBar">
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
            <form class='OnboardingMain-form-box'>
                <div class='OnboardingMain-form-items-single-row'>
                    <label>Registered Company Name</label><br/>
                    <input name='RegisteredCompanyName' onChange={handleChange('RegisteredCompanyName')} defaultValue={values.RegisteredCompanyName}/>
                </div>
                <div class='OnboardingMain-form-items-single-row'>
                    <label>Company Contact No.</label><br/>
                    <input name='CompanyContactNumber' onChange={handleChange('CompanyContactNumber')} defaultValue={values.CompanyContactNumber}/>
                </div>
                <div class='OnboardingMain-form-items-multi-row'>
                    <div class='OnboardingMain-form-items-single-row'>
                        <label>GSTIN</label><br/>
                        <input name='GSTIN' onChange={handleChange('GSTIN')} defaultValue={values.GSTIN}/>
                    </div>
                    <div class='OnboardingMain-form-items-single-row'>
                        <label>TIN</label><br/>
                        <input name='TIN' onChange={handleChange('TIN')} defaultValue={values.TIN}/>
                    </div>
                    <div class='OnboardingMain-form-items-single-row'>
                        <label>Currency</label><br/>
                        <select className="OnboardingMain-form-select" name="Currency" onChange={handleChange('Currency')} defaultValue={values.Currency}>
                            <option value="">Select currency</option>
                            {/* <option value="AFN">Afghan Afghani</option>
                            <option value="ALL">Albanian Lek</option>
                            <option value="ARS">Argentine Peso</option>
                            <option value="AMD">Armenian Dram</option>
                            <option value="BHD">Bahraini Dinar</option>
                            <option value="CAD">Canadian Dollar</option>
                            <option value="CLP">Chilean Peso</option>
                            <option value="CNY">Chinese Yuan</option>
                            <option value="COP">Colombian Peso</option>
                            <option value="CRC">Costa Rican ColÃ³n</option>
                            <option value="DOP">Dominican Peso</option>
                            <option value="EUR">Euro</option>
                            <option value="HKD">Hong Kong Dollar</option>
                            <option value="HUF">Hungarian Forint</option>
                            <option value="ISK">Icelandic KrÃ³na</option> */}
                            <option value="INR">Indian Rupee</option>
                            {/* <option value="IRR">Iranian Rial</option>
                            <option value="IQD">Iraqi Dinar</option>
                            <option value="ILS">Israeli New Sheqel</option>
                            <option value="ITL">Italian Lira</option>
                            <option value="JMD">Jamaican Dollar</option>
                            <option value="JPY">Japanese Yen</option>
                            <option value="JOD">Jordanian Dinar</option>
                            <option value="KES">Kenyan Shilling</option>
                            <option value="KWD">Kuwaiti Dinar</option>
                            <option value="MYR">Malaysian Ringgit</option>
                            <option value="MXN">Mexican Peso</option>
                            <option value="KPW">North Korean Won</option>
                            <option value="OMR">Omani Rial</option>
                            <option value="PKR">Pakistani Rupee</option>
                            <option value="QAR">Qatari Rial</option>
                            <option value="RUB">Russian Ruble</option>
                            <option value="SAR">Saudi Riyal</option>
                            <option value="RSD">Serbian Dinar</option>
                            <option value="SBD">Solomon Islands Dollar</option>
                            <option value="XDR">Special Drawing Rights</option>
                            <option value="LKR">Sri Lankan Rupee</option>
                            <option value="SEK">Swedish Krona</option>
                            <option value="SYP">Syrian Pound</option>
                            <option value="TZS">Tanzanian Shilling</option>
                            <option value="TRY">Turkish Lira</option>
                            <option value="UAH">Ukrainian Hryvnia</option>
                            <option value="AED">United Arab Emirates Dirham</option>
                            <option value="USD">US Dollar</option>
                            <option value="VEF">Venezuelan BolÃ­var</option>
                            <option value="YER">Yemeni Rial</option>
                            <option value="ZMK">Zambian Kwacha</option> */}
                        </select>
                    </div>
                </div>
                <div class='OnboardingMain-form-items-address-row'>
                    <div class='OnboardingMain-form-items-single-row'>
                        <label>Company  Registered Address</label><br/>
                        <textarea name='CompanyRegisteredAddress' onChange={handleChange('CompanyRegisteredAddress')} defaultValue={values.CompanyRegisteredAddress} />
                    </div>
                    <div class='OnboardingMain-form-items-single-row'>
                        <label>Correspondence Address</label><br/>
                        <textarea name='CorrespondenceAddress' onChange={handleChange('CorrespondenceAddress')} defaultValue={values.CorrespondenceAddress}/>
                    </div>
                </div>
                <label className='OB-SPOC-label' m="10px"><b><u>Company SPOC (Specific POint of Contact)</u> :</b></label>
                <div class='OnboardingMain-form-items-SPOC-row'>
                    <div class='OnboardingMain-form-items-SPOC-row-1'>
                        <div class='OB-SPOC-item'>
                            <label>SPOC Name</label><br/>
                            <input name='SpocName' onChange={handleChange('SpocName')} defaultValue={values.SpocName}/>
                        </div>
                        <div class='OB-SPOC-item'>
                            <label>SPOC Title</label><br/>
                            <input name='SpocTitle' onChange={handleChange('SpocTitle')} defaultValue={values.SpocTitle}/>
                        </div>
                    </div>
                    <div class='OnboardingMain-form-items-SPOC-row-1'>
                        <div class='OB-SPOC-item'>
                            <label>Contact Number</label><br/>
                            <input name='SpocContactNumber' onChange={handleChange('SpocContactNumber')} defaultValue={values.SpocContactNumber}/>
                        </div>
                        <div class='OB-SPOC-item'>
                            <label>Email ID</label><br/>
                            <input name='SpocEmailID' onChange={handleChange('SpocEmailID')} defaultValue={values.SpocEmailID}/>
                        </div>
                    </div>
                </div>
            </form>
            <button className='OB-next-btn' onClick={ Continue }>Next</button>
        </div>
    )
};

export default OnboardingMain;