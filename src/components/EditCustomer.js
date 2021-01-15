import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function EditCustomer(props) {

    const [open, setOpen] = useState(false);  // Formin state, alussa suljettu
    const [customer, setCustomer] = useState({ // Uus asiakas-olio tietojen tallentamiseksi
        firstname: '',
        lastname: '',
        streetaddress: '',
        postcode: '',
        city: '',
        email: '',
        phone: ''
    });

    const handleClickOpen = () => { // Edit-formin avaus
        setCustomer({                    // Päivittää edit- lomakkeen tiedot sen auton tiedoiksi mitä edittiä painettiin
            firstname: props.params.data.firstname,
            lastname: props.params.data.lastname,
            streetaddress: props.params.data.streetaddress,
            postcode: props.params.data.postcode,
            city: props.params.data.city,
            email: props.params.data.email,
            phone: props.params.data.phone
        })
        console.log(props.params);
        setOpen(true);
    };
  
    const handleClose = () => {     // Formin sulkeminen
      setOpen(false);
    };

    const handleSave = () => {  // tallennetaan uus asiakas
        props.updateCustomer(props.params.value, customer); // Props.params.value = linkki asiakkaaseen (tsekkaa console)
        handleClose();
    }

    const inputChanged = (event) => {
        setCustomer({...customer, [event.target.name]: event.target.value});
    }

    return(
        <div>
        <Button size="small" color="inherit" onClick={handleClickOpen}>
        Edit
        </Button>
        <Dialog open={open} onClose={handleClose} >
            <DialogTitle>Update customer information</DialogTitle>
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

export default EditCustomer;