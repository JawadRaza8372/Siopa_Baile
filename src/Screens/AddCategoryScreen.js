import React,{useState} from 'react'
import {db} from "../config/Fire"
import LoadingCompnent from '../Components/LoadingCompnent'
import { useHistory } from 'react-router-dom'
function AddCategoryScreen({user}) {
    let location=useHistory();
    const [fdata, setfdata] = useState('')
    const handlein=(e)=>{
        const name=e.target.id;
        const value=e.target.value;
        setfdata((prevalue)=>{
                return{
                    ...prevalue,
                    [name]:value
                }
            })
        }
        const submit=(e)=>{
            e.preventDefault();
            console.log(fdata)
            db.collection('Category').add({
                name: fdata.name,
                description: fdata.name,
              }).then(()=>{
                  location.push('/')
              }).catch((err)=>
              console.log(err)
              )
        }

        if (user){
            if (`${user.data}` !== 'undefined' && `${user.data.role}` !== 'undefined'){
            if (user.data.role && user.data.role === 'Admin'){
                return (
                    <div className="middlediv">
                       <form onSubmit={submit} className="formAddproduct">
                        <h2 className="formHeading">Add A new Category</h2>
                        <input className="formInput" id="name" onChange={handlein} required type="text" placeholder="Category Name"/>            
            <button type='submit' className="myButton2">Add Category</button>
            
                       </form>
                    </div>
                )
            }}
            else{
                location.push('/')
                return null
            }
        }
        else{
return (<LoadingCompnent/>)
        }


   
}

export default AddCategoryScreen
