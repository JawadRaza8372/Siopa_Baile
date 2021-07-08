import React from 'react'
import { useHistory } from 'react-router-dom'
import LoadingCompnent from '../Components/LoadingCompnent'
import {NoheadingItems3} from '../Components/NoheadingItems'
function SellerProducts({data,user,category}) {
let location=useHistory();
    if(user){
        if (`${user.data}` !== 'undefined' && `${user.data.role}` !== 'undefined'){

    if (user.data.role && user.data.role === 'Seller'){
        return (
            <>
                 <div style={{width:"100%",height:"auto",overflowX:"hidden"}}>
                <div className="row">
    <div className="col-10 mx-auto p-4">
    <div className="container pt-4">
    
    <NoheadingItems3 data={data} user={user} category={category}/>
    
    </div>
        
    
    
    </div></div>
    
                </div>
            </>
        )
    }}
    else{
        location.push('/')
        return null
    }
    
}
else{
    return (
        <>
            <LoadingCompnent/>
        </>
    )  
}

   
}

export default SellerProducts
