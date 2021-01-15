import { React, useState} from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

function AddCustomer(props) {

    const [open, setOpen] = useState('');
    const [customer, setCustomer] = useState({
        firstname: '',
        lastname: '',
        streetaddress: '',
        postcode: '',
        city: '',
        email: '',
        phone: ''
    });

    const handleClickOpen = () => { // Formin avaus
        setOpen(true);
      };
    
      const handleClose = () => {   // Formin sulkeminen
        setOpen(false);
      };
  
      const handleSave = () => {    // tallennetaan uus asiakas
          props.addCustomer(customer);
          handleClose();
      }
  
      const inputChanged = (event) => {
          setCustomer({...customer, [event.target.name]: event.target.value});
      }
  
    return(
        <div>
        <Button style={{ margin: 10 }} variant="outlined" color="secondary" onClick={handleClickOpen}>
        Add a new customer
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle>New Customer</DialogTitle>
            <DialogContent>
            <TextField
                margin="dense"
                label="First Name"
                name="firstname" // Olion attribuutin nimi
                value={customer.fistname}   // Olio.attribuutti
                onChange={inputChanged}
                fullWidth
            />
            <TextField
                margin="dense"
                label="Last Name"
                name="lastname"
                value={customer.lastname}
                onChange={inputChanged}
                fullWidth
            />
            <TextField
                margin="dense"
                label="Street Address"
                name="streetaddress"
                value={customer.streetaddress}
                onChange={inputChanged}
                fullWidth
            />
            <TextField
                margin="dense"
                label="Postcode"
                name="postcode"
                value={customer.postcode}
                onChange={inputChanged}
                fullWidth
            />
            <TextField
                margin="dense"
                label="City"
                name="city"
                value={customer.city}  
                onChange={inputChanged}
                fullWidth
            />
            <TextField
                margin="dense"
                label="Email"
                name="email" 
                value={customer.email}
                onChange={inputChanged}
                fullWidth
            />
            <TextField
                margin="dense"
                label="Phonenumber"
                name="phone" 
                value={customer.phone}
                onChange={inputChanged}
                fullWidth
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="secondary">
                Cancel
            </Button>
            <Button onClick={handleSave} color="primary">
                Save
            </Button>
            </DialogActions>
        </Dialog>
        </div>
    )
}

export default AddCustomer;