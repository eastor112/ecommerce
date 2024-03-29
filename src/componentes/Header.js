import React from 'react';
import { NavLink } from "react-router-dom";
import clsx from 'clsx'
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import WidgetsOutlinedIcon from '@material-ui/icons/WidgetsOutlined';
import LocalAtmOutlinedIcon from '@material-ui/icons/LocalAtmOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import MenuIcon from '@material-ui/icons/Menu';

import { IconButton, List, ListItem, ListItemText, withWidth } from '@material-ui/core';

import logo from './../assets/images/logo.png'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  offset: theme.mixins.toolbar,
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'reverse',
    position: 'relative',
    border: 'solid 1px #666',
    borderRadius: '30px',
    backgroundColor: fade(theme.palette.common.white, 0.8),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.3),
    },
    width: '300px',
    padding: 0
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: '25px',
    paddingRight: `calc(1em + ${theme.spacing(4)}px)`,
    width: '100%',
  },

  listHorizontal: {
    display: 'flex',
    flexDirection: 'row',
    padding:0
  },
  listItem: {
    padding: 0,
    width: '140px',
  },
  hide: {
    display: 'none',
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'black',
  },
  linkActive:{
    color: '#0d6efd',
  }
}));

const Header = (props) => {
  const classes = useStyles();

  return (
    <div>
      <AppBar className={clsx(classes.appBar, {
          [classes.appBarShift]: props.open,
        })} color='inherit' position="fixed">
        <Toolbar>

          <IconButton edge="start" className={clsx(classes.menuButton, props.open && classes.hide)} color="inherit" aria-label="menu" onClick={()=>{props.toggleOpen()}}>
            <MenuIcon />
          </IconButton>
          <NavLink to='/'>
            <img src={ logo } alt="logo"/>
          </NavLink>
          <List className={classes.listHorizontal} component="nav">

            <NavLink className={classes.links} to='/categorias' activeClassName={classes.linkActive}>
              <ListItem className={classes.listItem} button>
                <WidgetsOutlinedIcon />
                <ListItemText>
                  <Typography variant="subtitle2" color="initial">
                    Categorias
                  </Typography>
                </ListItemText>
              </ListItem>
            </NavLink>

            <NavLink className={classes.links} to="/vende" activeClassName={classes.linkActive}>
              <ListItem className={classes.listItem} button>
                <LocalAtmOutlinedIcon />
                <ListItemText>
                  <Typography variant="subtitle2" color="initial">
                    Vende con nosotros
                  </Typography>
                </ListItemText>
              </ListItem>
            </NavLink>
              
            <NavLink className={classes.links} to="/tienda" activeClassName={classes.linkActive}>
              <ListItem button className={classes.listItem}>
                <StorefrontOutlinedIcon />
                <ListItemText>
                  <Typography variant="subtitle2" color="initial">
                    Ingresa a tu tienda
                  </Typography>
                </ListItemText>
              </ListItem>
            </NavLink>  
          </List>
          
          
          <div className={classes.grow} />
          
          <div className={classes.search}>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
          </div>
          <List className={classes.listHorizontal} component='div'>

            <NavLink className={classes.links} to="/usuario" activeClassName={classes.linkActive}>
              <ListItem button>
                <PermIdentityOutlinedIcon />
              </ListItem>
            </NavLink>
            
            <NavLink className={classes.links} to="/deseos" activeClassName={classes.linkActive}>
              <ListItem button>
                <FavoriteBorderOutlinedIcon />
              </ListItem>
            </NavLink>
            
            <NavLink className={classes.links} to="/carrito" activeClassName={classes.linkActive}>
              <ListItem button>
                <ShoppingCartOutlinedIcon />
              </ListItem>
            </NavLink>
          </List>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}>
      </div>
    </div>
  );
}

export default withWidth()(Header);
