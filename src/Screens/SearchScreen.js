import React,{useState,useEffect} from 'react'
import LoadingCompnent from '../Components/LoadingCompnent'
import NoheadingItems, { NoheadingItems2 } from '../Components/NoheadingItems'
import {db} from "../config/Fire"

function SearchScreen({category,data}) {
    const [state, setstate] = useState(null)
    const [catego, setcategoe] = useState(null)
if (category && data){
    return (
        <>
            <div style={{width:"100%",height:"auto",overflowX:"hidden"}}>
            <div className="row">
<div className="col-3 mx-auto p-4">
            <form onSubmit={(e)=>{e.preventDefault(); setcategoe(state)}} onChange={(e)=>setstate(e.target.value)} className="formAddproduct">
            <h2 className="formHeading">Search</h2>
            <select className="mydropdown" defaultValue="Category">
                <option disabled>Category</option>
                {category && category.map((data)=>(
                    <option key={data.id}>{data.post.name}</option>
                ))

                }
<option>Other</option>                
            </select>
<button type="submit" className="myButton2">Search</button>

           </form></div></div>

            <div className="row">
<div className="col-10 mx-auto p-4">
<div className="container pt-4">
<NoheadingItems2 data={data} categ={catego}/>
</div>
    


</div></div>

            </div> 
        </>
    )
}
else{
    return (
       <>
           <LoadingCompnent/>
       </>
    )
}
    
}

export default SearchScreen
