import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core'
import Header from './Header';
import SideBar from './SideBar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import VendeConNosotros from '../pages/vendeConNosotros/VendeConNosotros';
import PaginaPrincipal from '../pages/paginaPrincipal/PaginaPrincipal';
import IngresarTienda from '../pages/ingresarTienda/IngresarTienda';
import Categorias from '../pages/categorias/Categorias';
import ListaDeseos from '../pages/listaDeseos/ListaDeseos';
import Carrito from '../pages/carrito/Carrito';
import Usuario from '../pages/usuario/Usuario';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}))

const Contenedor = () => {

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  }

  return (
    <Router>
      <div className={classes.root}>
        <Header open={open} toggleOpen={toggleOpen} />
        <SideBar
          variant='persistent'
          open={open}
          toggleOpen={toggleOpen}
        />
        
        <div className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}>
          <div className={classes.toolbar}></div>
          <Switch>
            <Route path='/carrito'>
              <Carrito />
            </Route>
            <Route path='/deseos'>
              <ListaDeseos />
            </Route>
            <Route path='/usuario'>
              <Usuario />
            </Route>
            <Route path="/categorias">
              <Categorias />
            </Route>
            <Route path="/vende">
              <VendeConNosotros />
            </Route>
            <Route path="/tienda">
              <IngresarTienda />
            </Route>
            <Route path="/">
              <PaginaPrincipal />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Contenedor;
