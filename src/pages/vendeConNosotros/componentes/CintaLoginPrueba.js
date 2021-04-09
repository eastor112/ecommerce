import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

  btnContainedWarning: {
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
  btnContainedSuccess: {
    padding: '10px 40px',
    marginRight: '20px',
    color: theme.palette.primary.contrastText,
    backgroundColor: '#12BF23',
    "&:hover": {
      backgroundColor: '#0D911A',
      "@media (hover: none)": {
        backgroundColor: '#1AEA2F'
      }
    }
  }

}));

const CintaLoginPrueba = () => {
  const classes = useStyles();

  return (
    <Box display='flex' justifyContent='space-between' alignItems='center' mb={8} mt={2}>
      <Box fontWeight='700' fontSize={32}>Vender en Online Shop</Box>
      <div>
        <Button variant='contained' className={classes.btnContainedSuccess}>Iniciar sesión</Button>
        <Button variant='contained' className={classes.btnContainedWarning}>Prueba Gratuita</Button>
      </div>
    </Box>
  );
}
//referencia para botones personalizados
export default CintaLoginPrueba;
