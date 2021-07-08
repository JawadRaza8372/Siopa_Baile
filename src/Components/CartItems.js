import React,{useState} from 'react'
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ProductDetailCarsole from '../Components/ProductDetailCarsole';
import RemoveShoppingCartOutlinedIcon from '@material-ui/icons/RemoveShoppingCartOutlined';
import ShopIcon from '@material-ui/icons/Shop';
import MyModel from "./MyModel"
function CartItems({userid,productId,productData,removeItem}) {
    const [modal, setModal] = useState(false)
let removefromCart=()=>{
    console.log(productId)
    removeItem(productId)
}
    return (<>
        <div className="row p-2" style={{background:"white",borderRadius:"20px"}}>
        <div className="col-xs-10 col-sm-10 col-md-8 col-lg-4 col-xl-4 overflow-hidden p-2">
            <img
    style={{objectFit:"contain",width:"100%",height:"100%",borderRadius:"10px"}}

    src={productData.images[0]}
    alt="product image"
  />
            </div>
            
    
  <div style={{display:"flex",alignItems:'center'}} className="col-xs-10 col-sm-10 col-md-8 col-lg-4 col-xl-4">
  <div>
  
  <p>{productData.name}</p>
  <p>Category:{productData.category}</p>
  <p >Rating:<StarIcon style={{color:"gold"}}/><StarIcon style={{color:"gold"}}/><StarIcon style={{color:"gold"}}/><StarHalfIcon style={{color:"gold"}}/><StarBorderIcon style={{color:"black"}}/></p>
  </div>
    
  </div>
<div  style={{display:"flex",alignItems:'center'}} className="col-xs-10 col-sm-10 col-md-4 col-lg-2 col-xl-2">
<div>
<p>Price:{productData.price} $</p>
    <p>Status: {productData.status}</p>
</div>
 

</div>

<div  style={{display:"flex",alignItems:'center'}} className="col-xs-10 col-sm-10 col-md-4 col-lg-2 col-xl-2">
<div style={{textAlign:"left"}}>
<button onClick={()=>setModal(true)} className="btn btn-outline-success mr-3"><ShopIcon/></button>
            <button onClick={removefromCart} className="btn btn-outline-danger"><RemoveShoppingCartOutlinedIcon/></button></div>
       
</div>
            </div>
           

            <br/>
            <MyModel openModel={modal} closeModel={()=>setModal(false)} productId={productId} sellerId={productData.seller}  userid={userid}/></>
    )
}

export default CartItems
