import React,{useState,useEffect} from 'react'
import {db,auth,storage} from "../config/Fire"
import FileUploader from 'react-firebase-file-uploader';
import { useHistory } from 'react-router-dom';
function SignUpScreen({user}) {
    const [fdata, setfdata] = useState({name:'',email:'',role:'',password:'',confirm:'',phone:'',dob:'',profile:''})
  const [message, setmessage] = useState(null)
  let location=useHistory()
    useEffect(() => {
        if (message){
            const interval = setInterval(() => {
                setmessage(null);
                location.push("/")
                }, 5000);
            return () => clearInterval(interval);
        }
       
      }, [message]);
      
    
    const handleUploadSuccess = filename => {
        storage.ref("images") 
          .child(filename)
          .getDownloadURL()
          .then(url => { 
            setfdata((prevalue)=>{
            return{
                ...prevalue,
                profile:url
            }
        });
console.log("success");     
        }
          );
      };

      const handleUploadError = error => {
        console.error(error);
    };
    const signUps = async(e) => {
        e.preventDefault();
        if(fdata.password === fdata.confirm){
            if(fdata.profile === ''){
                alert("Please Upload Profile Picture And Wait For Preview")

            }
            else{

           
            await auth.createUserWithEmailAndPassword(
                fdata.email, 
                fdata.password
              ).then((resp) => {
                  console.log(resp.user)
                 db.collection('users').doc(resp.user.uid).set({
                  name: fdata.name,
                  role: fdata.role,
                  phone: fdata.phone,
                  dob:fdata.dob,
                  profileImage:fdata.profile
                }).then(()=>{
                    console.log("")
                });
                db.collection('Cart').doc(resp.user.uid).set({
                    product:[]
                }).then(()=>{
                      console.log("file created")
                  })
                  db.collection('Order').doc(resp.user.uid).set({
                    data:[]
                }).then(()=>{
                    setmessage('account created');
                  })
              }
              )
        } }
        else{
            alert("Please Enter Same Password")
        }
       
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
           <form onSubmit={signUps} className="formAddproduct">
            <h2 className="formHeading">SignUp</h2>
            <div className="row">
                <div className="col">
                <input className="formInput" type="text" onChange={handlein} id="name" placeholder="name" required autoComplete="off"/>
                </div>
                <div className="col">
                <input className="formInput" type="text" id="email" onChange={handlein} placeholder="Email"  required autoComplete="off"/>
                    </div>
            </div>
            <select className="mydropdown" id="role" onChange={handlein} defaultValue="Role"  required>
                <option disabled>Role</option>
                <option>Buyer</option>
                <option>Seller</option>
            </select> 
            
            <div className="row">
                <div className="col">
                <input className="formInput" type="password" id="password" onChange={handlein}  placeholder="Enter Password"  required autoComplete="off"/>
                </div>
                <div className="col">
                <input className="formInput" type="password" id="confirm" onChange={handlein} placeholder="Confirm Password"  required autoComplete="off"/>
                    </div>
            </div>
            <input className="formInput" type="number" id="phone" onChange={handlein} placeholder="Phone Number Where You wanna Get Notification"  required autoComplete="off"/>

            <div className="row">
                <div className="col">
                <label>Date Of Birth</label>
            <br/>
                <input className="formInput" onChange={handlein} type="date" id="dob" placeholder="date of birth"  required autoComplete="off"/>
                </div>
                <div className="col">
                <label>Profile Image</label>
            <br/>
            <FileUploader className="formInput"
            required
            accept='*' name='avatar'
            randomizeFilename
            storageRef={
              storage.ref("images")
            }
            onUploadStart = {null}
            onUploadError = {handleUploadError}
            onUploadSuccess = {handleUploadSuccess}
            onProgress = {null}
          /><div style={{display:'flex'}}>
          {fdata.profile && <img style={{height:"70px",width:"70px",objectFit:"contain"}} src={fdata.profile} />}
                </div>
                                   </div>
            </div>
            {message && <><div style={{marginLeft:"auto",marginRight:"auto",width:"200px",height:"fit-content",paddingTop:"10px",background:"green",color:"white"}}>
    <p style={{textAlign:"center"}}>{message}</p>
        </div>
    <br/></>
}
<button type="submit" className="myButton2">SignUp</button>

           </form>
 
</div>
)
}

export default SignUpScreen
