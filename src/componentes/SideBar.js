import React from 'react';
import { makeStyles, useTheme, Drawer, Divider, IconButton } from '@material-ui/core'
import Filters from './Filters';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  toolbar: theme.mixins.toolbar,
}))

const SideBar = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Drawer 
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
      BackdropProps={{ invisible: true }}
      anchor='left'
      variant={props.variant}
      open={props.open}
    >
      <div className={classes.drawerHeader}>
        
          <IconButton onClick={props.toggleOpen}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>

      <Divider />
      <Filters />
    </Drawer>
  );
}

export default SideBar;
