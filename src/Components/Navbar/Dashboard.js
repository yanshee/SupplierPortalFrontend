import React, { useState,useEffect, useRef} from 'react'
import HomeNav from '../Navbar/HomeNav'
import '../../style/Dashboard.css'
import { FaArrowRight } from "react-icons/fa";
import CostChangeLogo from '../../images/CostChangeIcon.png'
import ReturnsLogo from '../../images/ReturnsIcon.png'
import PurchaseOrderLogo from '../../images/PurchaseOrderIcon.png'
import InvoicesLogo from '../../images/InvoicesIcon.png'
import DealsLogo from '../../images/Dealicon.png'
import AlertLogo from '../../images/AlertIcon.png'
import ASNLogo from '../../images/ASNicon.png'
import Analytics from '../../images/Analytics.png'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
 
const cors = require('cors');
 
const Dashboard=()=>{
 
 
    let navigate = useNavigate();
    const [currentData, setcurrentData] = useState(null);
 
    useEffect(() => {
        const itemdata = async () => {
                 await axios
        .get("http://localhost:8080/api/dashboards/service/getAllDashboardData")
        .then((res) => {
            setcurrentData(res.data)
           console.log(res.data)
        }).catch((err) => {
           console.log(err);
    })
        }
 
        itemdata()
     },[])
 
 
 
 
 
    const tableRef = useRef(null);
 
    return (
        <div class="Dashboard-container">
            <div>
                <HomeNav/>
            </div>
            <div class="Dashboard-Contents">
                <div class="OverviewContainer">
                    <div class="OverviewHeader">
                        <h2>Overview</h2>
                    </div>
                    <div class="OverviewContents">
                        <div class="Tile-container">
                            <div class="Tile">
                                <div class="Tile-title">
                                    {<img src={CostChangeLogo} alt='icon' class="Tile-icon"/>} &nbsp; Cost Change
                                </div>
                                { currentData?.ccList.map((ccList, index) => (
 
                                <p>{ccList}</p>
 
                                ))}
                                {<FaArrowRight class="Tile-arrow"/>}
                            </div>
                            <div class="Tile">
                                <div class="Tile-title">
                                    {<img src={ReturnsLogo} alt='icon' class="Tile-icon"/>} &nbsp; Retailer Returns
                                </div>
                                { currentData?.rrList.map((rrList, index) => (
 
                                <p>{rrList}</p>
 
                                ))}
                                <p> &nbsp; </p>
                                {<FaArrowRight class="Tile-arrow"/>}
                            </div>
                        </div>
 
                        <div class="Tile-container">
                            <div class="Tile">
                                <div class="Tile-title">
                                    {<img src={InvoicesLogo} alt='icon' class="Tile-icon"/>} &nbsp; Invoices
                                </div>
                                { currentData?.invList.map((invList, index) => (
 
                                <p>{invList}</p>
 
                                ))}
                               
                                {<FaArrowRight class="Tile-arrow"/>}
                            </div>
                            <div class="Tile">
                                <div class="Tile-title">
                                    {<img src={PurchaseOrderLogo} alt='icon' class="Tile-icon"/>} &nbsp; Customer Returns
                                </div>
                       
 
                                { currentData?.crList.map((crList, index) => (
 
                                <p>{crList}</p>
 
                                ))}
                                {<FaArrowRight class="Tile-arrow"/>}
                            </div>
                        </div>
                       
                        <div class="Deal-Container">
                            <div class="Deal-Tile">
                                <div class="Deal-Tile-title">
                                    {<img src={DealsLogo} alt='icon' class="Deal-Tile-icon"/>} &nbsp;Purchase Orders
                                </div>
                                { currentData?.poList.map((poList, index) => (
 
<p>{poList}</p>
 
))}
                                {<FaArrowRight class="Deal-Tile-arrow"/>}
                            </div>
                        </div>
 
                        <div class="ASN-Container">
                        <div class="ASN-Tile">
                            <div class="ASN-Tile-title">
                                {<img src={ASNLogo} alt='icon' class="ASN-Tile-icon"/>} &nbsp; ASN
                            </div>
                            { currentData?.asnList.map((asnList, index) => (
 
                            <p>{asnList}</p>
 
                            ))}
                             {<FaArrowRight class="Alerts-Tile-arrow"/>}
 
                           
                         
         
                        </div>
                        </div>
 
                    </div>                  
                </div>
 
                <div class="Dashboard-Contents2">
                    <div class="Analytics-Container">
                        {<img src={Analytics} alt='icon' class="Analytics-icon"/>}
                    </div>
                    <div class="Alerts-Container">
                        <div class="Alerts-Tile">
                            <div class="Alerts-Tile-title">
                                {<img src={AlertLogo} alt='icon' class="Alerts-Tile-icon"/>} &nbsp; Alerts
                            </div>
                            { currentData?.alertsList.map((alertsList, index) => (
 
                            <p>{alertsList}</p>
 
                            ))}
                            {<FaArrowRight class="Alerts-Tile-arrow"/>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
 
 
}
 
export default Dashboard