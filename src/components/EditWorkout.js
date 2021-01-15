import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function EditWorkout(props) {

    const [open, setOpen] = useState(false);
    const [workout, setWorkout] = useState({
        date: '',
        duration: '',
        activity: ''
    });

    const handleClickOpen = () => {
        setWorkout({
            date: props.params.data.date,
            duration: props.params.data.duration,
            activity: props.params.data.activity,
        })
        console.log(props.params);
        setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleSave = () => {
        props.updateWorkout(props.params.value, workout);
        handleClose();
    }

    const inputChanged = (event) => {
        setWorkout({...workout, [event.target.name]: event.target.value});
    }

    return(
        <div>
        <Button size="small" color="inherit" onClick={handleClickOpen}>
        Edit
        </Button>
        <Dialog open={open} onClose={handleClose} >
            <DialogTitle>Update workout information</DialogTitle>
            <DialogContent>
            <TextField
                margin="dense"
                label="Date"
                name="date" // Olion attribuutin nimi
                value={workout.date}   // Olio.attribuutti
                onChange={inputChanged}
                fullWidth
            />
            <TextField
                margin="dense"
                label="Duration"
                name="duration"
                value={workout.duration}
                onChange={inputChanged}
                fullWidth
            />
            <TextField
                margin="dense"
                label="Acitivity"
                name="activity"
                value={workout.activity}
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

export default EditWorkout;