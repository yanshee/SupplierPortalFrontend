
import React,{useState,useEffect} from 'react'
import logo from '../../images/KPMG-logo.jpg'
import '../../style/OrderSummary.css'
import HomeNav from '../Navbar/HomeNav'
import {FaUserAlt,FaInfoCircle, FaBell, FaSearch, FaFilter, FaSort, FaFileExport, FaArrowAltCircleUp, FaArrowCircleDown, FaArrowCircleUp} from "react-icons/fa";
import { FaHome,FaArrowLeft,FaAngleDoubleDown} from "react-icons/fa";
import { useNavigate} from "react-router-dom";
import HomeButton from '../Buttons/HomeButton';
import axios from 'axios';

const cors = require('cors');

function OrderSummary({id}) {


  let navigate = useNavigate();

    const [currentData, setcurrentData] = useState(null);
    const [itemdetails, setitemdetails] = useState(null);
    const [asnetails, setasnetails] = useState(null);
    const [expand,setexpand]=useState(true)
    const [expand2,setexpand2]=useState(true)
    const [expand3,setexpand3]=useState(true)
    const [expand4,setexpand4]=useState(true)

    const toggleExpanded3=()=>{
      setexpand4(!expand4)
    }

    const toggleExpanded=()=>{
      setexpand(!expand)
    }

    const toggleExpanded1=()=>{
      setexpand2(!expand2)
    }

    const toggleExpanded2=()=>{
      setexpand3(!expand3)
    }

    useEffect(() => {
        const itemdata = async () => {
        await axios
        .get(`http://localhost:5050/api/purchaseOrders/service/getPODetails?poId=${id}`)
        .then((res) => {
          setcurrentData(res.data)
          console.log(currentData);
        }).catch((err) => {
           console.log(err);
    })
        }
        itemdata()
     },[])
     console.log("Current Data",currentData)

     const [poData, setpoData] = useState()
 
 useEffect(() => {
      const itemdata = async () => {
               await axios
      .post(`http://localhost:4040/api/invoice/service/invoice/getPoItems?poIdArray[]=${id}`)
      .then((res) => {
        setpoData(res.data)
         console.log("h1", res)
      }).catch((err) => {
         console.log(err);
    })
 
      }
   
      itemdata()
    },[])

   useEffect(() => { 
    if (currentData) {
      setasnetails(JSON.parse(currentData.asnDetails));
    } else {
      setasnetails(null); // Or any default value you want
    }
   },[currentData])
   console.log("Hi there2",asnetails?.asnDetails?.asnNumberDetails)


   useEffect(() => { 
    if (currentData) {
      setitemdetails(JSON.parse(currentData.itemDetails));
    } else {
      setitemdetails(null); // Or any default value you want
    }
   },[currentData])
   console.log("Item",itemdetails)


    return (
<div>
      <div>
      <HomeNav/>
  </div>

  <div class='Invoices-heading'>
                <HomeButton/>
                <button onClick={() => navigate(-1)} class='back_button_dc'><FaArrowLeft
          style={{
            fontSize: "10px",
            marginRight: "5px",
            outline: "none",
            border: "none",
          }}
        />
          Back
        </button>
                <div className='InvoiceTitle'>
                    <p>Purchase Order</p>
                </div>
                <div class='PurchaseOrderMain-notification'>
         <a href='/AlertPO' className='CreateInvBtn1'>PO Alert &nbsp; {<FaBell/>}</a>
         </div>   
            </div>
    {/* <div class='PurchaseOrderMain-description'>

        <div class='PurchaseOrderMain-description-content'>
             <div class='PurchaseOrderMain-component-Home'>
                 {<FaHome className='PurchaseOrderMain-Ricons-Home'/>}
             </div>

             <div class='Back-button'>
                 {<FaArrowLeft className='PurchaseOrderMain-Ricons-Back' />}
                 <a href='/PurchaseOrderMain' class='PurchaseOrderMain-Back-a' style={{textDecoration:'none'}}>Back</a>
             </div>

                       
             <div class='PurchaseOrderMain-component-heading'>
                 <p>Purchase Orders</p>
             </div>
 

            <div class='PurchaseOrderMain-notification'>
                <div class='PurchaseOrderMain-notification-alerts'>
                     <a href='/AlertPO' class='PurchaseOrderMain-notification-a' onClick={() => navigate("/AlertPO")}>Order Alerts</a>
                     {<FaBell className='PurchaseOrderMain-Ricons'/>}

                </div>

             </div>      

        </div> */}

        {/* <div class='PurchaseOrderMain-searchbar'>

        <div class='PurchaseOrderMain-searchbar-container'>

                <input placeholder="Search here"/>

                {<FaSearch className='PurchaseOrderMain-Ricons-search'/>}

        </div>

    </div> */}

        {/* <div class='PurchaseOrderMain-Operations'>

                <div class='PurchaseOrderMain-Download'>

                    <a class='PurchaseOrderMain-Operations-content-a'>Export All</a>

                    {<FaFileExport className='PurchaseOrderMain-Ricons-down'/>}

                </div>

                <div class='PurchaseOrderMain-FilterBy'>

                    <a class='PurchaseOrderMain-Operations-content-a'>FilterBy</a>

                    {<FaFilter className='PurchaseOrderMain-Ricons-fil'/>}

                </div>

                <div class='PurchaseOrderMain-SortBy'>

                    <a class='PurchaseOrderMain-Operations-content-a'>SortBy</a>

                    {<FaSort className='PurchaseOrderMain-Ricons-sort'/>}

                </div>

            </div> */}

     {/* </div> */}

     <div class='Po-summary'>
                        <p>C.O. Summary</p>
                        {<FaAngleDoubleDown onClick={toggleExpanded} className='OrderSummary-Ricons-Uparraow' />}

         </div>
         {expand && (<div>      
         <div class='PO-wrapper'>
         <div class='left-wrapper'>
         <div class="item">
            <label class='item-fields'>Order Id: </label>
            <input className='RetailerReturnTextInput' value={currentData?.poNumber}></input>
          </div>
          <div class="item">
            <label class='item-fields'>Creation Date: </label>
            <input className='RetailerReturnTextInput' value={currentData?.creationDate}></input>
          </div> 
          <div class="item">
            <label class='item-fields'>Ship By Date: </label>
            <input className='RetailerReturnTextInput' value={currentData?.shipByDate}></input>
          </div>
          <div class="item">
            <label class='item-fields'>Estimated delivery Date: </label>
            <input className='RetailerReturnTextInput' value={currentData?.estDelDate}></input>
          </div>    
         </div>
 
         <div class='mid-wrapper'>
             <div class="item">
            <label class='item-fields'>Total Items: </label>
            <input className='RetailerReturnTextInput' value={currentData?.totalUniqItms}></input>
          </div>
          <div class="item">
            <label class='item-fields'>Supplier Site: </label>
            <input className='RetailerReturnTextInput' value={currentData?.location}></input>
          </div>
          <div class="item">
            <label class='item-fields'>Lead Time: </label>
            <input className='RetailerReturnTextInput' value={currentData?.leadTime}></input>
          </div>
               
         </div>
 
         <div class='right-wrapper'>
             <div class="item">
            <label class='item-fields'>Total Qty: </label>
            <input className='RetailerReturnTextInput' value={currentData?.totalItemQty}></input>
          </div>
          <div class="item">
            <label class='item-fields'>Total Cost: </label>
            <input className='RetailerReturnTextInput' value={currentData?.totalCost}></input>
          </div>
          {/* <div class="item">
            <label class='item-fields'>Cost %: </label>
            <input className='RetailerReturnTextInput' value={currentData?.shippingAddress}></input>
          </div>      */}
         </div>
     </div>
</div>
)}
     <div class='Item-Details'>
                    <p>Item Details</p>
                    {<FaAngleDoubleDown onClick={toggleExpanded1} className='OrderSummary-Ricons-Uparraow' />}
     </div>

   
{expand2 &&(
<div className="outer-wrapper">
  <div className="table-wrapper">
    <table className="table">
      <thead>
        <tr>
          <th>Item Id</th>
          <th>Item Name</th>
          <th>Ordered Qty</th>
          <th>Shipped Qty</th>
          <th>Delivered Qty</th>
          <th>Estimated Cost</th>
        </tr>
      </thead>
      <tbody>
    
      {poData?.map((items, index) => (  
        <tr>
        
          <td>{items?.itemId}</td>
          <td>{items.itemName}</td>
          <td>{items.orderedQty}</td>
          <td>15</td>
          <td>3</td>
          <td>1,10,000</td>
          
        </tr>
      ))}  
      </tbody>
    </table> 
    <br />
  </div>
  </div>
)}

 
  <div class='ASN-Details'>

                    <p>ASN Details</p>
                    {<FaAngleDoubleDown onClick={toggleExpanded3}  className='OrderSummary-Ricons-Uparraow'/>}

  </div>

 
{expand4 &&(
  <div class="PO-wrapper">
    <div class="left-wrapper">
    <div class="item">
            <label class='item-fields'>ASN Count: </label>
            <input className='RetailerReturnTextInput' value={asnetails?.asnDetails?.asnCount}></input>
          </div>
          <div class="item">
            <label class='item-fields'>Container Count: </label>
            <input className='RetailerReturnTextInput' value={asnetails?.asnDetails?.containerCount}></input>
          </div>
    
    </div>
      <div class="mid-wrapper">
      <div class="item">
            <label class='item-fields'>ASN Details: </label>
            <input className='RetailerReturnTextInput' value={asnetails?.asnDetails?.asnNumber}></input>
          </div>
     </div>
      <div class="right-wrapper">
      <div class="item">
            <label class='item-fields'>Container Details: </label>
            <input className='RetailerReturnTextInput' value={asnetails?.asnDetails?.containerDetails}></input>
          </div>
     </div></div>
)}



 

 

     <div class='ASN-Details-table'>
     </div>

     {/* <div class='ASN-Number1'>
                    <p>ASN #2248</p>
                     {<FaArrowCircleDown className='ASN-Number-Ricons-Downarraow'/>}
     </div> */}

{asnetails?.asnDetails?.asnNumberDetails?.map((items, index) => ( 
  <div>
  <div class='ASN-Number2'>
  <p>{items.asnNumber}</p>
  {<FaAngleDoubleDown onClick={toggleExpanded1} className='OrderSummary-Ricons-Uparraow'/>}
</div>

<div className="outer-wrapper">
            <div className="table-wrapper">
              <table className="table">
             <thead>
                  <tr>
                    <th>Creation Date</th>
                    <th>DC Number</th>
                    <th>Total Items</th>
                    <th>Total Shipping Qty</th>
                    <th>shipping Date</th>
                    <th>Eta</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>

                {/* {asnetails?.asnDetails?.asnNumberDetails?.map((items, index) => ( ))}     */}
        <tr>
        
          <td>{items?.creationDate}</td>
          <td>{items?.dcNumber}</td>
          <td>{items?.totalItems}</td>
          <td>{items?.totalShippingQty}</td>
          <td>{items?.shippingDate}</td>
          <td>{items?.eta}</td>
          <td>{items?.location}</td>
        </tr>
                </tbody>
              </table>
              <br />
            </div>

  </div>  



</div>
))}
     
 
  </div>  

 

    )

    }

   export default OrderSummary;