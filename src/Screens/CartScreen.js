import React,{useState,useEffect} from 'react'
import CartItems from '../Components/CartItems';
import LoadingCompnent from '../Components/LoadingCompnent';
import {db} from "../config/Fire"
function CartScreen({user,category,data}) {
    const [cartdata, setcartdata] = useState(null)
    const [myCart, setmyCart] = useState(null)
let fetch=async()=>{
    await db.collection('Cart').doc(user.userId).get().then((doc) => {
        if (doc) {
          setcartdata(doc.data().product);
        }
    })
}
    useEffect(() => {
        if (user){
            fetch()
        }
    }, [])

    let removeItemformCart=(idd)=>{
        let newvalue=cartdata.filter((dta)=>{
            return  dta !== idd;
            })
            if (user){
                db.collection('Cart').doc(user.userId).set({product:newvalue})
                setcartdata(newvalue)
            }
            
    }

    if (user && data){
        return (
            <div style={{overflow:"hidden"}}>
             <div className="row">
    <div className="col-10 mx-auto">
    <div className="container">
    <br/>  
    {data && data.map(dt=>{
    return (<>{cartdata && cartdata.map((dts=>
    (    (dts === dt.id)?(<CartItems userid={user.userId} productId={dt.id} productData={dt.post} removeItem={removeItemformCart}/>):null
    )))}</>
    
    )
    
    })
    
    }
    
    
    
    </div></div></div>
              
            </div>
        )
    }
    else{
        return(<LoadingCompnent/>)
    }
}

export default CartScreen
