import React, { useState, useEffect } from 'react';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';
import { Snackbar } from '@material-ui/core';

import AddWorkout from './AddWorkout';
import EditWorkout from './EditWorkout';

function Workouts() {

    const workoutApi = 'https://customerrest.herokuapp.com/api/trainings'
    // Empty object for workout-data
    const [workouts, setWorkouts] = useState([]);
    const [open, setOpen] = useState('');

    // ACTUALLY fetch workout-data when UI is drawn
    useEffect(() => { 
        getWorkouts();
     }, [])


     const handleOpen = () => {
        setOpen(true);
    } 

    const handleClose = () => {
        setOpen(false);
    }


     // Fetch workouts from API
    const getWorkouts = () => {
        fetch(workoutApi)
            .then(response => response.json())
            .then(data => setWorkouts(data.content))
            .then(err => console.error(err))
    }

    const addWorkout = (newWorkout) => {
        fetch(workoutApi, {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(newWorkout)
        })
        .then(response => getWorkouts()) // haetaan päivittynyt lista treeneistä
        .catch(err => console.error(err))
    }

    // Edit Workout

    const updateWorkout = (link, customer) => {
        fetch(link, {
            method: 'PUT',
            headers:{
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(customer)
        })
        .then(response => getWorkouts())
        .catch(err => console.error(err))
    }

    // Delete Workout
    const deleteWorkout = (params) => {

        if (window.confirm("Are you sure?")){ 
         fetch(params.value, {
             method: 'DELETE'
         })
         .then(_ => getWorkouts())
         .then(_ => handleOpen())
         .catch(err => console.err(err))
         }
     }

    // Assign the workout-info to display
    const columns = [
        {field: 'date', sortable: true, filter: true},
        {field: 'duration', sortable: true, filter: true},
        {field: 'activity', sortable: true, filter: true},
        {
            headerName: '',
            field: 'links[1].self.href',
            width: 90,
            cellRendererFramework: params =>
            <EditWorkout updateWorkout={updateWorkout} params={params} />
        },
        {   headerName: '',
            field: 'links[0].self.href',
            width: 90,
            cellRendererFramework: params =>
                <IconButton onClick={() => deleteWorkout(params)}>
                    <DeleteIcon color="secondary"/>
                </IconButton>
        }
    ]

    return(
        <div>
            <AddWorkout addWorkout={addWorkout}/>
            <div className="ag-theme-alpine-dark" style={ { height: 803, width: '47%', margin: 'auto' } }>
                <AgGridReact
                    rowData={workouts}
                    columnDefs={columns}
                    pagination="true"
                    paginationPageSize="20"
                    >
                </AgGridReact>
            </div>
            <Snackbar 
                open={open}
                onClose={handleClose}
                autoHideDuration={2500}
                message="Workout deleted successfully"
            />
        </div>
    )
}

export default Workouts;