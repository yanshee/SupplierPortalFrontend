import React, { useState } from 'react'
import '../../style/OnboardingDoc.css'
import { FaArrowLeft, FaPaperclip } from "react-icons/fa";
import OnboardingNav from '../Navbar/OnboardingNav';
import { Step, ProgressBar } from "react-step-progress-bar"
import "react-step-progress-bar/styles.css";
import '../../style/Stepper.css'
import axios from 'axios';


const OnboardingSummary=({ prevStep, nextStep, handleChange, values })=>
{
    const Previous = e => 
    {
        e.preventDefault();
        prevStep();
    }

    const reg_id = localStorage.getItem('reg_id');

    const [Data,setData]=useState({
        "company_name": values.RegisteredCompanyName,
  "company_contact_no": values.CompanyContactNumber,
  "gstin": values.GSTIN,
  "tin": values.TIN,
  "currency": values.Currency,
  "registered_addr": values.CompanyRegisteredAddress,
  "correspondance_addr": values.CorrespondenceAddress,
  "spoc_name": values.SpocName,
  "spoc_title": values.SpocTitle,
  "spoc_contact": values.SpocContactNumber,
  "spoc_email": values.SpocEmailID,
  "license_doc": values.LicenseAgreementDoc,
  "insurance_doc": values.InsuranceDoc,
  "regulatory_doc": values.RegulatoryComplianceInformationDoc,
  "litigation_doc": values.LitigationRecordsDoc,
  "FinancialRecordsDoc": values.FinancialRecordsDoc,
  "credit_info_doc": values.LicenseAgreementDoc,
  "nda_doc": values.NdaDoc,
  "sustainability_doc":values.SustainableSourcingReportsDoc,
  "business_licensing_doc": values.BusinessLicensingDoc,
  "cancelled_cheque_doc": values.CancelledChequeDoc,
  "subcontractor_info_doc": values.SubcontractorsDoc,
  "ifscCode": values.BankIFCScode,
  "accountNo":  values.BankAccountNumber,
  "bankName": values.BankName,
  "city":values.BankCity,
  "state": values.BankState,
  "paymentMode": values.BankCity,
  "branchName": values.BankBranchName,
  "onboarding_status": "",
  "regsitration_id": reg_id,
  "regsitration_pwd": ""
    });

    function submitdata(e)
    {
        e.preventDefault();

        axios({
            method: 'post',
            url: 'http://localhost:1010/api/login/service/submitOnboardingDetails',
           // headers: {Authorization: `Bearer ${bearerToken}`},
            data: Data,
          })
            .then(function (response) {
             //  console.log("response", JSON.stringify(response.data))
             console.log("response", response.data);
             if ( response.data) {
                window.location = "/OnboardingSubmission";
              } else {
                const Continue = e => {
                    e.preventDefault();
                    nextStep();
                  }
              //  document.getElementById("error").textContent += "Invalid Credentials or You already change the password.";
              }
            })
            .catch(function (error) {
              console.log('error', error);
            });

       
    }

    return (
        <div class='OnboardingMain-container'>
            <OnboardingNav/>
            <ProgressBar percent={100} filledBackground="#00338E" className="Onboarding-ProgressBar">
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
                <a href='/OnboardingMain' className='OBOBDoc-backBtn' onClick={Previous}> <i>{<FaArrowLeft/>}</i>  Back </a>
            </div>
            <div className='OBDoc-Title'>
                <label>Summary</label>
            </div>
            <br/>
            <div className='OBDoc-DocUpload-box'>
                <div className='OBDoc-DocUpload-Table-container'>
                    <table className='OBDoc-DocUpload-Table'>
                        <tbody>
                             <tr>
                                <td class="DocTableCol1">License Agreement</td>
                                <td>{values.LicenseAgreementDoc} </td>
                                <td class="DocTableCol3"><input type='file' name='LicenseAgreementDoc'  onChange={handleChange('LicenseAgreementDoc')} /></td>
                            </tr>
                          <tr>
                                <td class="DocTableCol1">Insurance</td>
                                <td>{values.InsuranceDoc} </td>
                                <td class="DocTableCol3"> <input type='file' name='InsuranceDoc' onChange={handleChange('InsuranceDoc')} /></td>
                            </tr>
                            <tr id='RowGap'>
                                 <td> </td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td class="DocTableCol1">Regulatory compliance information</td>
                                <td>{values.RegulatoryComplianceInformationDoc} </td>
                                <td class="DocTableCol3"> <input type='file' name='RegulatoryComplianceInformationDoc' onChange={handleChange('RegulatoryComplianceInformationDoc')} defaultValue={values.RegulatoryComplianceInformationDoc}/></td>
                            </tr>
                            <tr>
                                <td class="DocTableCol1">Litigation Records</td>
                                <td>{values.LitigationRecordsDoc} </td>
                                <td class="DocTableCol3"> <input type='file' name='LitigationRecordsDoc' onChange={handleChange('LitigationRecordsDoc')} defaultValue={values.LitigationRecordsDoc}/></td>
                            </tr>
                            <tr>
                                <td class="DocTableCol1">Financial records/credit history</td>
                                <td>{values.FinancialRecordsDoc} </td>
                                <td class="DocTableCol3"> <input type='file' name='FinancialRecordsDoc' onChange={handleChange('FinancialRecordsDoc')} defaultValue={values.FinancialRecordsDoc}/></td>
                            </tr>
                            <tr>
                                <td class="DocTableCol1">Company ownership documentation</td>
                                <td>{values.CompanyOwnershipDoc} </td>
                                <td class="DocTableCol3"> <input type='file' name='CompanyOwnershipDoc' onChange={handleChange('CompanyOwnershipDoc')} defaultValue={values.CompanyOwnershipDoc}/></td>
                            </tr>
                            <tr>
                                <td class="DocTableCol1">Non disclosure agreements (NDA)</td>
                                <td>{values.NdaDoc} </td>
                                <td class="DocTableCol3"> <input type='file' name='NdaDoc' onChange={handleChange('NdaDoc')} defaultValue={values.NdaDoc}/></td>
                            </tr>
                            <tr>
                                <td class="DocTableCol1">Supplier Diversity Certifications</td>
                                <td>{values.SupplierDiversityCertificationsDoc} </td>
                                <td class="DocTableCol3"> <input type='file' name='SupplierDiversityCertificationsDoc' onChange={handleChange('SupplierDiversityCertificationsDoc')} defaultValue={values.SupplierDiversityCertificationsDoc}/></td>
                            </tr>
                            <tr>
                                <td class="DocTableCol1">Sustainable sourcing reports</td>
                                <td>{values.SustainableSourcingReportsDoc} </td>
                                <td class="DocTableCol3"> <input type='file' name='SustainableSourcingReportsDoc' onChange={handleChange('SustainableSourcingReportsDoc')} defaultValue={values.SustainableSourcingReportsDoc}/></td>
                            </tr>
                            <tr>
                                <td class="DocTableCol1">Security Certifications</td>
                                <td>{values.SecurityCertificationsDoc} </td>
                                <td class="DocTableCol3"> <input type='file' name='SecurityCertificationsDoc' onChange={handleChange('SecurityCertificationsDoc')} defaultValue={values.SecurityCertificationsDoc}/></td>
                            </tr>
                            <tr>
                                <td class="DocTableCol1">Business Licensing</td>
                                <td>{values.BusinessLicensingDoc} </td>
                                <td class="DocTableCol3"> <input type='file' name='BusinessLicensingDoc' onChange={handleChange('BusinessLicensingDoc')} defaultValue={values.BusinessLicensingDoc}/></td>
                            </tr>
                            <tr>
                                <td class="DocTableCol1">Cancelled Cheque</td>
                                <td>{values.CancelledChequeDoc} </td>
                                <td class="DocTableCol3"> <input type='file' name='CancelledChequeDoc' onChange={handleChange('CancelledChequeDoc')} defaultValue={values.CancelledChequeDoc}/></td>
                            </tr>
                            <tr>
                                <td class="DocTableCol1">Tax information, Forms & Identification Numbers</td>
                                <td>{values.TaxFormsIdentificationDoc} </td>
                                <td class="DocTableCol3"> <input type='file' name='TaxFormsIdentificationDoc' onChange={handleChange('TaxFormsIdentificationDoc')} defaultValue={values.TaxFormsIdentificationDoc}/></td>
                            </tr>
                            <tr>
                                <td class="DocTableCol1">Subcontractors, Outsourced Functions</td>
                                <td>{values.SubcontractorsDoc} </td>
                                <td class="DocTableCol3"> <input type='file' name='SubcontractorsDoc' onChange={handleChange('SubcontractorsDoc')} defaultValue={values.SubcontractorsDoc}/></td>
                            </tr> 
                            <tr id='RowGap'>
                                <td>Bank Details :</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td class="DocTableCol1">Account Number</td>
                                <td>{values.BankAccountNumber}</td>
                                <td class="DocTableCol3"> </td>
                            </tr>
                            <tr>
                                <td class="DocTableCol1">IFSC Code</td>
                                <td>{values.BankIFCScode}</td>
                                <td class="DocTableCol3"> </td>
                            </tr>
                            <tr>
                                <td class="DocTableCol1">Branch</td>
                                <td>{values.BankBranchName}</td>
                                <td class="DocTableCol3"> </td>
                            </tr>
                            <tr>
                                <td class="DocTableCol1">State</td>
                                <td>{values.BankState}</td>
                                <td class="DocTableCol3"> </td>
                            </tr>
                        </tbody>
                    </table>
                </div><br/>
            </div>
            <br/>
            <button className='OB-next-btn' onClick={submitdata}>Submit</button><br/><br/>
        </div>
    )   
};

export default OnboardingSummary;