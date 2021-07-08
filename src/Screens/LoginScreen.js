import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'
import {auth} from "../config/Fire"
function LoginScreen() {
    const [fdata, setfdata] = useState('')
    const [errMessg, seterrMessg] = useState(null)
    const location=useHistory();
    const submit=(e)=>{
        e.preventDefault();
auth.signInWithEmailAndPassword(
 fdata.email,
  fdata.password
).then(() => {
location.push('/')
}).catch((err) => {
  seterrMessg(err.message);
});
    }
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
    return (
        <div className="middlediv">
           <form onSubmit={submit} className="formAddproduct">
            <h2 className="formHeading">Login</h2>
            <input className="formInput" id="email" type="email" onChange={handlein} placeholder="Email"/>
            <input className="formInput" id="password" onChange={handlein} type="password" placeholder="Your Password"/>
            {          errMessg && <p style={{color:"red"}}>{errMessg}</p>
}
<button type="submit" className="myButton2">Login</button>

           </form>
        </div>
    )
}

export default LoginScreen
