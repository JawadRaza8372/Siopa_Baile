import React from 'react'
import {MyCard2,MyCard, MyCard3} from "./MyCard"
function NoheadingItems({data}) {
    return (
        <div className="row">
           {data && data.map((dt)=>(
    <MyCard2 key={dt.id} data={dt} productName={dt.post.name} imgurl={dt.post.images[0]}/>

))

}

        </div>
    )
}
function NoheadingItems2({data,categ}) {
  return (
        <div className="row">

{data && data.map((dt)=>(
    (dt.post.category === categ)?
        <MyCard2 key={dt.id} data={dt} productName={dt.post.name} imgurl={dt.post.images[0]}/>:null
    
    

))

}
        </div>
    )
}
function NoheadingItems3({data,user,category}) {
    return (
          <div className="row">
  {data && data.map((dt)=>(
      (dt.post.seller === user.userId)?
          <MyCard3 key={dt.id} data={dt} productName={dt.post.name} imgurl={dt.post.images[0]} category={category}/>:null
      
      
  
  ))
  
  }
          </div>
      )
  }
export default NoheadingItems
export {NoheadingItems2,NoheadingItems3}
