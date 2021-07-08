import React,{useState,useEffect} from 'react'
import home from "../assets/home.png"

function OrderProductCard({products,info}) {
    const [result, setresult] = useState(null)
   useEffect(() => {
    if(products){
        products.map((pdata)=>{
               if(pdata.id === info.productId){
                  setresult(pdata)            }
           })
       }
   }, [])
    return (<>
       {result && <><div style={{width:"100%",height:"auto",overflow:"hidden",background:"white",borderRadius:"10px"}}>
<div className="row">
<div className="col-md-6  order-1 order-lg-1 d-flex">
<img style={{objectFit:"contain",borderRadius:"10px"}} src={result.post.images[0]} alt="header img" className="img-fluid"/>

</div>
<div  className="col-md-6 pt-lg-0 order-2 order-lg-2 d-flex justify-content-center flex-column">
    <div style={{height:"340px",overflowY:"auto",overflowX:"hidden",padding:"7px"}}>
    <h2>{result.post.name}</h2>
    <h4>Unit Cost:{result.post.price} $</h4>
    <h4>Quantity: {info.quantity}</h4>
    {info &&   (info.orderStatus === 'Shipped')?
  <h4 style={{color:"green",fontWeight:"bold"}}>Order Status:{info.orderStatus}</h4>
  :(info.orderStatus === 'Not Shipped Yet')?
  <h4 style={{color:"red",fontWeight:"bold"}}>Order Status:{info.orderStatus}</h4>
  :<h4 style={{color:"#dbca00",fontWeight:"bold"}}>Order Status:{info.orderStatus}</h4>


  }
    <h5>Country: {info.country}</h5>
    <h5>Address: {info.address}</h5>
    <h5>Postal Code: {info.postalCode}</h5>
    <h5>Total Price:{info.quantity*result.post.price} $</h5>
    <p className="textLeftAlign">*Delivery Charges Excluded</p>
</div>
</div>
</div>
        </div></>}</>
    )
}

export default OrderProductCard
