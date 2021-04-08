import React, { useState } from 'react';

import { Hidden, makeStyles } from '@material-ui/core'
import Header from './Header';
import SideBar from './SideBar';

const useStyles = makeStyles( theme => ({
  root: {
    display: 'flex'
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  }
}))

const Contenedor = () => {

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleOpen = () =>{
    setOpen(!open);
  }

  return (
    <div className={classes.root}>
      <Header toggleOpen={toggleOpen}/> 
      <Hidden xsDown>
        <SideBar variant='permanent' open={true}/>
      </Hidden>
      <Hidden smUp>
        <SideBar 
          variant='temporary' 
          open={open}
          onClose={ toggleOpen }
        />
      </Hidden>
      <div className={classes.content}>
        <div className={classes.toolbar}></div>
        Contenido
      </div>

    </div>
  );
}

export default Contenedor;
