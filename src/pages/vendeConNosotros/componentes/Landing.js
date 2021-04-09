import { Box, Button } from '@material-ui/core';
import React from 'react';
import imgEcommerce from './../assets/ecommerce1.png'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  btnContainedWarning: {
    marginRight: '20px',
    padding: '10px 40px',
    color: theme.palette.primary.contrastText,
    backgroundColor: '#F1AB22',
    "&:hover": {
      backgroundColor: '#D8930E',
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: '#F4BD52'
      }
    }
  },

  btnPrecios: {
    marginRight: '20px',
    padding: '9px 40px',
    border: '2px solid',
    fontWeight: 'bold',
  },
  textColor: {
    color: '#828282'
  }
}));

const Landing = () => {
  const classes = useStyles();

  return (
    <Box display='flex' mb={10}>
      <div>
        <Box className={classes.textColor} fontWeight='700' fontSize={32}>
          Lleva tu negocio al mundo digital. Somos la mejor opción para crear tu tienda en linea.
        </Box>
        <Box className={classes.textColor} fontSize={24} my={6} lineHeight={2}>
          Contamos con un buscador avanzado, panel de administracion y una interfaz de usuario optimizada para facilitar la compra de tus clientes.
        </Box>

        <div>
          <Button variant='contained' className={classes.btnContainedWarning} >Prueba Gratuita</Button>
          <Button variant='outlined' className={classes.btnPrecios} >Ver Precios</Button>
        </div>
      </div>
      <img src={imgEcommerce} alt="" />
    </Box>
  );
}

export default Landing;
