import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function AppBar() {

    return (
        <Router>
            <div className="navi" >
                <AppBar position="static" style={{ background: '#2f3030' }}>
                    <Typography variant="h6">
                        Aaron ryhti ja liike
                    </Typography>
                    <Tabs variant="fullWidth" >
                        <Tab label="Customers"/>
                        <Tab label="Workouts" />
                    </Tabs>
                <Link to="/">Home</Link>{' '}
                <Link to="/customers">Customers</Link>{' '}
                <Link to="/workouts">Workouts</Link>{' '}
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/customers" component={Customers} />
                    <Route path="/workouts" component={Workouts} />
                    <Route render={() => <h1>Page not found</h1>} />
                </Switch>
                </AppBar>
            </div>
        </Router>

    )
}

export default AppBar;