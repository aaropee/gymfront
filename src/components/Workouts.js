import React, { useState, useEffect } from 'react';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';
import { Snackbar } from '@material-ui/core';

function Workouts() {

    const workoutApi = 'https://customerrest.herokuapp.com/api/trainings'
    // Empty object for workout-data
    const [workouts, setWorkouts] = useState([]);

    // ACTUALLY fetch workout-data when UI is drawn
    useEffect(() => { 
        getWorkouts();
     }, [])

     // Fetch workouts from API
    const getWorkouts = () => {
        fetch(workoutApi)
            .then(response => response.json())
            .then(data => setWorkouts(data.content))
            .then(err => console.error(err))
    }

    // Assign the workout-info to display
    const columns = [
        {field: 'date', sortable: true, filter: true},
        {field: 'duration', sortable: true, filter: true},
        {field: 'activity', sortable: true, filter: true},
    ]

    return(
        <div>
            <div className="ag-theme-alpine-dark" style={ { height: 800, width: '38%', margin: 'auto' } }>
                <AgGridReact
                    rowData={workouts}
                    columnDefs={columns}
                    pagination="true"
                    paginationPageSize="20"
                    >
                </AgGridReact>
            </div>
        </div>
    )
}

export default Workouts;