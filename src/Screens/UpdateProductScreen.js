import React from 'react'

function UpdateProductScreen({user,category,data}) {
    return (
        <div className="middlediv">
           <form className="formAddproduct">
            <h2 className="formHeading">Update Product</h2>
            <input className="formInput" type="text" placeholder="product name"/>
            <textarea className="formInput" type="text" placeholder="product description"/>
            <select className="mydropdown" defaultValue="Category">
                <option disabled>Category</option>
                <option>Category12</option>
                <option>Category122</option>

            </select>
            <input className="formInput" type="file" accept="images/*"/>
            <input className="formInput" type="number" placeholder="price in dollars"/>
<button className="btn btn-outline-success">Update product</button>

           </form>
        </div>
    )
}

export default UpdateProductScreen
