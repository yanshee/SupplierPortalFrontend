import React, { useState } from 'react'
import '../../style/OnboardingDoc.css'
import { FaArrowLeft, FaPaperclip } from "react-icons/fa";
import OnboardingNav from '../Navbar/OnboardingNav';
import { Step, ProgressBar } from "react-step-progress-bar"
import "react-step-progress-bar/styles.css";
import '../../style/Stepper.css'


const OnboardingDoc=({ prevStep, nextStep, handleChange, values })=>
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
        <div class='OnboardingMain-container'>
            <OnboardingNav/>
            <ProgressBar percent={35} filledBackground="#00338E" className="Onboarding-ProgressBar">
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
            <br/>
            <div class='OBDoc-backBtn-container'>
                <a className='OBOBDoc-backBtn' onClick={Previous}> <i>{<FaArrowLeft/>}</i>  Back </a>
            </div>
            <div className='OBDoc-Title'>
                <label>Upload Documents</label>
            </div>
            <br/>
            <form className='OBDoc-DocUpload-box'>
                <div className='OBDoc-DocUpload-Table-container'>
                    <table className='OBDoc-DocUpload-Table'>
                        <tbody>
                            <tr>
                                <td class="DocTableCol1">License Agreement</td>
                                <td>Select File : </td>
                                <td class="DocTableCol3"> <input type='file' name='LicenseAgreementDoc' onChange={handleChange('LicenseAgreementDoc')} /></td>
                            </tr>
                            <tr>
                                <td class="DocTableCol1">Insurance</td>
                                <td>Select File : </td>
                                <td class="DocTableCol3"> <input type='file' name='InsuranceDoc' onChange={handleChange('InsuranceDoc')} defaultValue={values.InsuranceDoc}/></td>
                            </tr>
                            <tr id='RowGap'>
                                <td>Other Documents :</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td class="DocTableCol1">Regulatory compliance information</td>
                                <td>Select File : </td>
                                <td class="DocTableCol3"> <input type='file' name='RegulatoryComplianceInformationDoc' onChange={handleChange('RegulatoryComplianceInformationDoc')} defaultValue={values.RegulatoryComplianceInformationDoc}/></td>
                            </tr>
                            <tr>
                                <td class="DocTableCol1">Litigation Records</td>
                                <td>Select File : </td>
                                <td class="DocTableCol3"> <input type='file' name='LitigationRecordsDoc' onChange={handleChange('LitigationRecordsDoc')} defaultValue={values.LitigationRecordsDoc}/></td>
                            </tr>
                            <tr>
                                <td class="DocTableCol1">Financial records/credit history</td>
                                <td>Select File : </td>
                                <td class="DocTableCol3"> <input type='file' name='FinancialRecordsDoc' onChange={handleChange('FinancialRecordsDoc')} defaultValue={values.FinancialRecordsDoc}/></td>
                            </tr>
                            <tr>
                                <td class="DocTableCol1">Company ownership documentation</td>
                                <td>Select File : </td>
                                <td class="DocTableCol3"> <input type='file' name='CompanyOwnershipDoc' onChange={handleChange('CompanyOwnershipDoc')} defaultValue={values.CompanyOwnershipDoc}/></td>
                            </tr>
                            <tr>
                                <td class="DocTableCol1">Non disclosure agreements (NDA)</td>
                                <td>Select File : </td>
                                <td class="DocTableCol3"> <input type='file' name='NdaDoc' onChange={handleChange('NdaDoc')} defaultValue={values.NdaDoc}/></td>
                            </tr>
                            <tr>
                                <td class="DocTableCol1">Supplier Diversity Certifications</td>
                                <td>Select File : </td>
                                <td class="DocTableCol3"> <input type='file' name='SupplierDiversityCertificationsDoc' onChange={handleChange('SupplierDiversityCertificationsDoc')} defaultValue={values.SupplierDiversityCertificationsDoc}/></td>
                            </tr>
                            <tr>
                                <td class="DocTableCol1">Sustainable sourcing reports</td>
                                <td>Select File : </td>
                                <td class="DocTableCol3"> <input type='file' name='SustainableSourcingReportsDoc' onChange={handleChange('SustainableSourcingReportsDoc')} defaultValue={values.SustainableSourcingReportsDoc}/></td>
                            </tr>
                            <tr>
                                <td class="DocTableCol1">Security Certifications</td>
                                <td>Select File : </td>
                                <td class="DocTableCol3"> <input type='file' name='SecurityCertificationsDoc' onChange={handleChange('SecurityCertificationsDoc')} defaultValue={values.SecurityCertificationsDoc}/></td>
                            </tr>
                            <tr>
                                <td class="DocTableCol1">Business Licensing</td>
                                <td>Select File : </td>
                                <td class="DocTableCol3"> <input type='file' name='BusinessLicensingDoc' onChange={handleChange('BusinessLicensingDoc')} defaultValue={values.BusinessLicensingDoc}/></td>
                            </tr>
                            <tr>
                                <td class="DocTableCol1">Cancelled Cheque</td>
                                <td>Select File : </td>
                                <td class="DocTableCol3"> <input type='file' name='CancelledChequeDoc' onChange={handleChange('CancelledChequeDoc')} defaultValue={values.CancelledChequeDoc}/></td>
                            </tr>
                            <tr>
                                <td class="DocTableCol1">Tax information, Forms & Identification Numbers</td>
                                <td>Select File : </td>
                                <td class="DocTableCol3"> <input type='file' name='TaxFormsIdentificationDoc' onChange={handleChange('TaxFormsIdentificationDoc')} defaultValue={values.TaxFormsIdentificationDoc}/></td>
                            </tr>
                            <tr>
                                <td class="DocTableCol1">Subcontractors, Outsourced Functions</td>
                                <td>Select File : </td>
                                <td class="DocTableCol3"> <input type='file' name='SubcontractorsDoc' onChange={handleChange('SubcontractorsDoc')} defaultValue={values.SubcontractorsDoc}/></td>
                            </tr>
                        </tbody>
                    </table>
                </div><br/>
                <div>
                    <input type='checkbox'className='OBDoc-DocUpload-checkbox'/> <label>I confirm and that the uploaded information is true to the best of my knowledge.</label>
                </div>
            </form>
            <br/>
            <button className='OB-next-btn' onClick={Continue}>Next</button><br/><br/>
        </div>
    )   
};

export default OnboardingDoc;