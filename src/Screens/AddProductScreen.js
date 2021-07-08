import React,{useState,useEffect} from 'react'
import {db, storage} from "../config/Fire"
import FileUploader from 'react-firebase-file-uploader';
import LoadingComponent from "../Components/LoadingCompnent"
import { useHistory } from 'react-router-dom';
function AddProductScreen({user,category}) {
    const [state, setstate] = useState('')
    const [state1, setstate1] = useState({downloadURLs:[]})
    const [fdata, setfdata] = useState({name:'',description:'',status:'',category:'',price:'',images:state1.downloadURLs,sellerId:''})
const location=useHistory()
    let fetchCategory=async ()=>{
      await  db.collection('Category').orderBy('name','asc').get().then((snapshot)=>{
        setstate(snapshot.docs.map(doc=>(({id:doc.id,post:doc.data()}))))
      })
    }
    useEffect(() => {
        fetchCategory()
    }, [])
    const handleUploadSuccess = async (filename) => {
        const downloadURL = await storage.ref("images") 
          .child(filename)
          .getDownloadURL()
          setfdata((prevalue)=>{
            return{
                ...prevalue,
                images:[...prevalue.images,downloadURL]
            }
        })
console.log("success");     
      
      };
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
      const handleUploadError = error => {
        console.error(error);
    };
    let submit=async (e)=>{
e.preventDefault();
fdata.seller=`${user.userId}`

await db.collection('Products').add(fdata).then(()=>{
console.log("done");
location.push("/sellerProducts")
})
    }
    if (user){
if (`${user.data}` !== 'undefined' && `${user.data.role}` !== 'undefined'){
if (user.data.role && user.data.role === 'Seller'){
  return (
    <div className="middlediv">
       <form onSubmit={submit} className="formAddproduct">
        <h2 className="formHeading">Add Product</h2>
        <input className="formInput" type="text" id="name" onChange={handlein} placeholder="Product name"/>
        <textarea className="formInput" type="text" id="description" onChange={handlein}  placeholder="Product description"/>
        <div className="row">
            <div className="col">
            <select className="mydropdown"  id="category" onChange={handlein}  defaultValue="Category">
            <option disabled>Category</option>
            {state && state.map((data)=>(
                <option key={data.id}>{data.post.name}</option>
            ))

            }
<option>Other</option>                
        </select>
            </div>
            <div className="col">
            <select className="mydropdown"  id="status" onChange={handlein}  defaultValue="Status">
            <option disabled>Status</option>
            <option>Available</option>
            <option>Not Available</option>

        </select>
                </div>
        </div>
       
       
        <input className="formInput"  id="price" onChange={handlein}  type="number" placeholder="$Price"/>

        <FileUploader
        className="formInput"
      accept="image/*"
      name="image-uploader-multiple"
      randomizeFilename
      storageRef={storage.ref("images")}
      onUploadStart={null}
      onUploadError={handleUploadError}
      onUploadSuccess={handleUploadSuccess}
      onProgress={null}
      multiple
    />  
    <p>wait for preview</p>
    <div style={{display:"flex"}}>
    {(fdata.images) && fdata.images.map((data,index)=>
    (<img style={{height:"70px",width:"70px",objectFit:"contain"}} key={index} src={data} />)
    )
}
    </div> 
    
    <button type="submit" className="myButton2">Add product</button>


       </form>
    </div>
)
}}
else{
  location.push("/")
  return null
}
      
    }
    else{
      return (<>
        <LoadingComponent/>
      </>)
    }
}

export default AddProductScreen
