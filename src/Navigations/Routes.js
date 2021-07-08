import React from 'react'
import {Switch,Route} from "react-router-dom"
import HomeScreen from '../Screens/HomeScreen'
import ProductDetails from '../Screens/ProductDetails'
import CartScreen from '../Screens/CartScreen'
import AddProductScreen from '../Screens/AddProductScreen'
import AddCategoryScreen from '../Screens/AddCategoryScreen'
import UpdateProductScreen from '../Screens/UpdateProductScreen'
import OrderProduct from '../Screens/OrderProduct'
import LoginScreen from '../Screens/LoginScreen'
import SignUpScreen from '../Screens/SignUpScreen'
import VerifyAccount from '../Screens/VerifyAccount'
import ForgotPassword from '../Screens/ForgotPassword'
import SellerProductorder from '../Screens/SellerProductorder'
import OurProducts from '../Screens/OurProducts'
import ReactNavBar from '../Components/ReactNavBar'
import SearchScreen from '../Screens/SearchScreen'
import SellerProducts from '../Screens/SellerProducts'
export const Routes = ({loginStatus,products,category,userlogout}) => {
    return (<>
    <ReactNavBar user={loginStatus} logout={userlogout}/>
 <Switch>
            <Route exact path="/" component={HomeScreen}/>
            <Route exact path="/login" render={()=><LoginScreen user={loginStatus}/>}/>
            <Route exact path="/products" render={()=><OurProducts data={products}/>}/>
            <Route exact path="/sellerProducts" render={()=><SellerProducts data={products} user={loginStatus} category={category}/>}/>
            <Route exact path="/search" render={()=><SearchScreen category={category} data={products}/>}/>
            <Route exact path="/SignUp" render={()=><SignUpScreen user={loginStatus}/>}/>
            <Route exact path="/forgotPassword" render={()=><ForgotPassword/>}/>
            <Route exact path="/verifyAccount" render={()=><VerifyAccount/>}/>
            <Route exact path="/cart" render={()=><CartScreen user={loginStatus}  category={category} data={products}/>}/>
            <Route exact path="/productDetail/:id" render={()=><ProductDetails user={loginStatus}  category={category} data={products}/>}/>
            <Route exact path="/addProduct" render={()=><AddProductScreen user={loginStatus}  category={category}/>}/>
            <Route exact path="/addCategory" render={()=><AddCategoryScreen user={loginStatus}/>}/>
            <Route exact path="/updateProduct" render={()=><UpdateProductScreen user={loginStatus}  category={category} data={products}/>}/>
            <Route exact path="/orderedProduct" render={()=><OrderProduct user={loginStatus} data={products}/>}/>
            <Route exact path="/productOrderSeller" render={()=><SellerProductorder user={loginStatus} data={products}/>}/>
        </Switch>
   
       
            </>
       
    )
}
