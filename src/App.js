import './styles/App.css';
// Components
import Customers from './components/Customers';
import Workouts from './components/Workouts';
import Home from './components/Home';
// Material-UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// Routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <AppBar position="static" style={{ background: '#2f3030' }}>
          <Typography variant="h6">
            Aaron ryhti ja liike
          </Typography>
          <Tabs variant="fullWidth">
            <Tab label="Customers"/>
            <Tab label="Workouts" />
          </Tabs>
        </AppBar>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/customers" component={Customers} />
          <Route path="/workouts" component={Workouts} />
        </Switch>

        {/* <Customers /> */}
        {/* <Workouts /> */}
      </div>
    </Router>

  );
}

export default App;
