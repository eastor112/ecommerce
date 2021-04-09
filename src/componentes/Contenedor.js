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
import VendeConNosotrosPage from '../pages/vendeConNosotros/VendeConNosotrosPage';
import PrincipalPage from '../pages/paginaPrincipal/PrincipalPage';
import IngresarTiendaPage from '../pages/ingresarTienda/IngresarTiendaPage';
import CategoriasPage from '../pages/categorias/CategoriasPage';
import ListaDeseosPage from '../pages/listaDeseos/ListaDeseosPage';
import CarritoPage from '../pages/carrito/CarritoPage';
import UsuarioPage from '../pages/usuario/UsuarioPage';

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
              <CarritoPage />
            </Route>
            <Route path='/deseos'>
              <ListaDeseosPage />
            </Route>
            <Route path='/usuario'>
              <UsuarioPage />
            </Route>
            <Route path="/categorias">
              <CategoriasPage />
            </Route>
            <Route path="/vende">
              <VendeConNosotrosPage />
            </Route>
            <Route path="/tienda">
              <IngresarTiendaPage />
            </Route>
            <Route path="/">
              <PrincipalPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Contenedor;
