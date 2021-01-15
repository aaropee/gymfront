import './styles/App.css';
// Components
import Customers from './components/Customers';
import Workouts from './components/Workouts';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
// Material-UI
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import { makeStyles } from '@material-ui/core/styles';
// Routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {

const useStyles = makeStyles({
  container: {
    display: "flex"
  }
});

const classes = useStyles();

  return (
    
    <Router>
      <Sidebar className={classes.container}/>
      <div className="App">
        <AppBar position="static" style={{ background: '#2f3030' }}>
          <Typography variant="h4">
            Ryhti & Liike
          </Typography>
          <Tabs variant="fullWidth">
          </Tabs>
        </AppBar>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/customers" component={Customers} />
          <Route path="/workouts" component={Workouts} />
        </Switch> 
      </div>
    </Router>

  );
}

export default App;
