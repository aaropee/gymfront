import React, { useState, useEffect } from 'react';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';
import { Snackbar } from '@material-ui/core';

function Customers() {

    const customerApi = 'https://customerrest.herokuapp.com/api/customers'
    // Empty object for customer-data
    const [customers, setCustomers] = useState([]);

    // ACTUALLY fetch customer-data when UI is drawn
    useEffect(() => { 
        getCustomers();
     }, [])

     // Fetch customers from API
    const getCustomers = () => {
        fetch(customerApi)
            .then(response => response.json())
            .then(data => setCustomers(data.content))
            .then(err => console.error(err))
    }

    // Assign the customer-info to display
    const columns = [
        {field: 'firstname', sortable: true, filter: true},
        {field: 'lastname', sortable: true, filter: true},
        {field: 'streetaddress', sortable: true, filter: true},
        {field: 'postcode', sortable: true, filter: true},
        {field: 'city', sortable: true, filter: true},
        {field: 'email', sortable: true, filter: true},
        {field: 'phone', sortable: true, filter: true}
    ]

    return(
        <div>
            <div className="ag-theme-alpine-dark" style={ { height: 800, width: '90%', margin: 'auto' } }>
                <AgGridReact
                    rowData={customers}
                    columnDefs={columns}
                    pagination="true"
                    paginationPageSize="20"
                    >
                </AgGridReact>
            </div>
        </div>
    )
}

export default Customers;