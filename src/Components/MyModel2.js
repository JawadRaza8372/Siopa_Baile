import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '40%',
    height:"auto",
    overflowY:"auto",
    overflowX:'hidden',
    background: 'white',
    border: 'none',
    borderRadius:"20px",
    boxShadow: theme.shadows[5],
  },
}));

function MyModel2({openModel,closeModel,readmode,id,docid,custdata,proddata,orderdata,updatfun}) {
const [inp, setinp] = useState(null)
let updatefunct=(e)=>{
  e.preventDefault();
  let dac=orderdata;
  dac.orderStatus=inp;
  updatfun(id,docid,orderdata)
  closeModel()
}
    const classes=useStyles();
    const [modalStyle]=useState(getModalStyle);
    return (
        <Modal
open={openModel}
onClose={closeModel}
>
   <div style={modalStyle} className={classes.paper}>
{(readmode)?<div className="p-4">
  <h1 style={{textAlign:"center"}}>Order Info</h1>
  <h2>{proddata.name}</h2>
  <h3>{proddata.description}</h3>
  <h4>Category: {proddata.category}</h4>
  <h4>Price: {proddata.price} $</h4>
  <h4>Quantity:{orderdata.quantity}</h4>
  <h5>Country:{orderdata.country}</h5>
  <h5>Address:{orderdata.address}</h5>
  <h5>Postal Code:{orderdata.postalCode}</h5>
  <h5>Product Status:{proddata.status}</h5>
  <h5>Order Status:{orderdata.orderStatus}</h5>
  <h5>Order By:{custdata.name}</h5>
  <h5>Contact:{custdata.phone}</h5>

</div>: <form onSubmit={updatefunct} style={{padding:"20px",border:"1px solid gray",background:"white"}}>
<h1 style={{textAlign:"center"}}>Update Status</h1>
<select className="mydropdown" onChange={e=>setinp(e.target.value)} defaultValue="Status">
                <option disabled>Status</option>
                <option>Shipped</option>
                <option>Not Shipped Yet</option>
            </select>   

<button type="submit" className="myButton2">Update</button>
</form>}
    </div>
</Modal>
    )
}

 
export default MyModel2