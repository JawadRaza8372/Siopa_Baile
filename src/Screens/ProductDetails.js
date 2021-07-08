import React,{useState} from 'react'
import { useParams } from 'react-router-dom';
import LoadingCompnent from '../Components/LoadingCompnent';
import ProductDeatailsComponent from '../Components/ProductDeatailsComponent';
import ProductDeatailsComponentNoAuth from '../Components/ProductDeatailsComponentNoAuth';
function ProductDetails({user,data}) {
    const {id}=useParams()
    if(data && user){
        return (
            <>
                {data &&  data.map((dat)=>
                ((dat.id === id)?<ProductDeatailsComponent key={dat.id} itemDetail={dat} user={user} />:null)
            
            )
    
                }
            </>
        )
       
    }
    else if((data) && (!user)){
        return (
            <>
                {data &&  data.map((dat)=>
                ((dat.id === id)?<ProductDeatailsComponentNoAuth key={dat.id} itemDetail={dat} />:null)
            
            )
    
                }
            </>
        )
    }
    else{
        return(<>
           <LoadingCompnent/>
       </>)
    }
   
    }
  

export default ProductDetails
