import React, { useState, useEffect } from 'react';

import { Snackbar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';

import AddCustomer from './AddCustomer';

function Customers() {

    const customerApi = 'https://customerrest.herokuapp.com/api/customers'
    // Empty object for customer-data
    const [customers, setCustomers] = useState([]);
    const [open, setOpen] = useState('');

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

    const handleOpen = () => {
        setOpen(true);
    } 

    const handleClose = () => {
        setOpen(false);
    }

    // Add a new customer
    const addCustomer = (newCustomer) => {
        fetch(customerApi, {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(newCustomer)
        })
        .then(response => getCustomers()) // haetaan päivittynyt asiakaslista
        .catch(err => console.error(err))
    }


    // Delete Customer
    const deleteCustomer = (params) => {

        if (window.confirm("Are you sure?")){ // Jos painaa ok ni true => delete tapahtuu, jos cancel niin false ja ei tapahdu
         fetch(params.value, {
             method: 'DELETE'
         })
         .then(_ => getCustomers()) // _meinaa että olio tulee sisään mutta sitä ei käytetä
         .then(_ => handleOpen())
         .catch(err => console.err(err))
         }
     }

    // Assign the customer-info to display
    const columns = [
        {field: 'firstname', sortable: true, filter: true},
        {field: 'lastname', sortable: true, filter: true},
        {field: 'streetaddress', sortable: true, filter: true},
        {field: 'postcode', sortable: true, filter: true},
        {field: 'city', sortable: true, filter: true},
        {field: 'email', sortable: true, filter: true},
        {field: 'phone', sortable: true, filter: true},
        {
            headerName: '',
            field: 'links[1].self.href',
            width: 90,
            cellRendererFramework: params =>
                <IconButton onClick={() => deleteCustomer(params)}>
                    <DeleteIcon color="secondary"/>
                </IconButton>
        }
    ]

    return(
        <div>
            <AddCustomer addCustomer={addCustomer} />
            <div className="ag-theme-alpine-dark" style={ { height: 800, width: '78%', margin: 'auto' } }>
                <AgGridReact
                    rowData={customers}
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
                message="Customer deleted successfully"
            />
        </div>
    )
}

export default Customers;