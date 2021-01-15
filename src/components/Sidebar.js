import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

import { withRouter } from 'react-router-dom';

const Sidebar = props => {

    const useStyles = makeStyles({
        drawer: {
          width: "200px",
          background: '#2f3030'
        }
      });
      const { history } = props;

      const classes = useStyles();

      // Navigation with history - prop
      const itemsList = [
        {
            text: 'Home',
            onClick: () => history.push('/')
          },
          {
              text: 'Customers',
              onClick: () => history.push('/customers')
            },
          {
              text: 'Workouts',
              onClick: () => history.push('/workouts')
            }
        ];
      

    return(
        <div>
            <Drawer variant="permanent" className={classes.drawer}>
                <List>
                    {itemsList.map((item, index) => {
                        const { text, onClick } = item;
                        return(
                            <ListItem button key={text} onClick={onClick}>
                                <ListItemText primary={text} onClick={onClick}/>
                            </ListItem>
                        );
                       })}
                </List>
            </Drawer>
        </div>
    );
};

export default withRouter(Sidebar);