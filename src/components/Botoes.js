import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import ReportIcon from '@material-ui/icons/Report';
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    backgroundColor: '#004A2F', // Cor de fundo pode ser ajustada conforme necessário
  },
});

const SimpleBottomNavigation = () => {
  const classes = useStyles();

  const handleOpenDenuncia = () => {
    // Lógica para redirecionar para a página de abertura de denúncias
    // Exemplo: window.location.href = '/abrir-denuncia';
    console.log('Abrir denúncia');
  };

  const handleOpenIbama = () => {
    // Lógica para redirecionar para a página de ligação do IBAMA
    // Exemplo: window.location.href = 'tel:seu-numero-ibama';
    console.log('Ligar para o IBAMA');
  };

  return (
    <BottomNavigation className={classes.root}>
      <BottomNavigationAction
        label="Abrir Denúncia"
        icon={<ReportIcon />}
        onClick={handleOpenDenuncia}
      />
      <BottomNavigationAction
        label="Ligar para o IBAMA"
        icon={<PhoneIcon />}
        onClick={handleOpenIbama}
      />
    </BottomNavigation>
  );
};

export default SimpleBottomNavigation;
