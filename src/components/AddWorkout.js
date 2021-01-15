import { React, useState} from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function AddWorkout(props) {

    const [open, setOpen] = useState('');
    const [workout, setWorkout] = useState({
        date: '',
        duration: '',
        activity: ''
    });

    const handleClickOpen = () => { // Formin avaus
        setOpen(true);
      };
    
      const handleClose = () => {     // Formin sulkeminen
        setOpen(false);
      };
  
      const handleSave = () => {  // tallennetaan uus treeni
          props.addWorkout(workout);
          handleClose();
      }
  
      const inputChanged = (event) => {
          setWorkout({...workout, [event.target.name]: event.target.value});
      }
  
    return(
        <div>
        <Button style={{ margin: 10 }} variant="outlined" color="secondary" onClick={handleClickOpen}>
        Add a new workout
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle>New Workout</DialogTitle>
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
                label="Activity"
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

export default AddWorkout;