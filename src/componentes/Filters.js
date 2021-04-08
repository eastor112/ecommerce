import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Filters = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemText primary="Marca" />
        </ListItem>
        
        <ListItem button>
          <ListItemText primary="Precio" />
        </ListItem>

        <ListItem button>
          <ListItemText primary="Color" />
        </ListItem>
      </List>
    </div>
  );
}

export default Filters;
