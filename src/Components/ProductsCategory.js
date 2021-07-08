import React from 'react'
import {ProductCarousel} from "./ProductCarousel"
function ProductsCategory({title,data}) {
    return (
        <>
          <div className="row productCarouseldiv">
<h1 className="productCrouselheadings">{title}</h1>

    <ProductCarousel data={data}/>
    

    
    
     </div><br/>
        </>
    )
}

export default ProductsCategory
