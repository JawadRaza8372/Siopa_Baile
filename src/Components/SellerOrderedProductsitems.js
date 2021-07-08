import React,{useState,useEffect} from 'react'
import EditIcon from '@material-ui/icons/Edit';
import InfoIcon from '@material-ui/icons/Info';
import MyModel2 from "./MyModel2"
import {db} from "../config/Fire"
function SellerOrderedProductsitems({id,docid,orderdata,productsData,updatfun}) {
    let [custdata,setcustdata]=useState(null);
    let [proddata,setproddata]=useState(null);
    const [modal, setModal] = useState(false)
    const [modal2, setModal2] = useState(false)
useEffect(() => {
  db.collection('users').doc(orderdata.orderBy).get().then((doc)=>{
    setcustdata(doc.data());

  })
}, [])
useEffect(() => {
  db.collection('Products').doc(orderdata.productId).get().then((doc)=>{
    setproddata(doc.data());

  })
}, [])
    return (<>
        {(custdata && proddata) && <>
        
          <div style={{width:"100%",height:"auto",overflow:"hidden",background:"white",borderRadius:"10px"}}>
<div className="row">
<div className="col-md-6  order-1 order-lg-1 d-flex">
<img style={{objectFit:"contain",borderRadius:"10px"}} src={proddata.images[0]} alt="header img" className="img-fluid"/>

</div>
<div  className="col-md-6 pt-lg-0 order-2 order-lg-2 d-flex justify-content-center align-items-center flex-column">
    <div style={{height:"300px",overflowY:"auto",overflowX:"hidden",padding:"7px"}}>
    <p>{proddata.name}</p>
  <p>category:{proddata.category}</p>
  <p>Price:{proddata.price} $</p>
  <p>Order By:{custdata.name}</p>
  <p>Customer Phone:{custdata.phone}</p>
  {orderdata &&   (orderdata.orderStatus === 'Shipped')?
  <p style={{color:"green",fontWeight:"bold"}}>Order Status:{orderdata.orderStatus}</p>
  :(orderdata.orderStatus === 'Not Shipped Yet')?
  <p style={{color:"red",fontWeight:"bold"}}>Order Status:{orderdata.orderStatus}</p>
  :<p style={{color:"#dbca00",fontWeight:"bold"}}>Order Status:{orderdata.orderStatus}</p>


  }
  <div  style={{display:"flex",alignItems:'center'}} className="col-xs-10 col-sm-10 col-md-4 col-lg-3 col-xl-3">
<button onClick={()=>setModal(true)} className="btn btn-outline-success mr-3"><EditIcon/></button>
<button onClick={()=>setModal2(true)} className="btn btn-outline-primary"><InfoIcon/></button>

       
</div>
</div>
</div>
</div>
        </div>




        
       
           

            <br/>
            <MyModel2 openModel={modal} closeModel={()=>setModal(false)} id={id} docid={docid} custdata={custdata} proddata={proddata} orderdata={orderdata} updatfun={updatfun}/>
            <MyModel2 openModel={modal2} closeModel={()=>setModal2(false)} readmode="hy"  id={id} docid={docid} custdata={custdata} proddata={proddata} orderdata={orderdata} updatfun={updatfun}/>
</>}
            </>
    )
}

export default SellerOrderedProductsitems
