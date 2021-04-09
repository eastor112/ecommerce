import React from 'react';
import Card from './componentes/Card';
import CintaLoginPrueba from './componentes/CintaLoginPrueba';
import Landing from './componentes/Landing';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  marginContainer: {
    margin: '0 120px'
  },
  marginCinta: {
    marginTop: '30px'
  }

}));

const VendeConNosotrosPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.marginContainer}>
      <CintaLoginPrueba />
      <Landing />
      <Card />
    </div>
  );
}

export default VendeConNosotrosPage;
