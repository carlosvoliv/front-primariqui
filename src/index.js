import React from 'react';
import ReactDOM from 'react-dom';
import Quartos from './views/quartos';
import './assets/css/style.css'
import Layout from './components/layout'


ReactDOM.render(
  <React.Fragment>
    <Layout name= 'Quartos'>
    <Quartos />
    </Layout>
  </React.Fragment>,
  document.getElementById('root')
);


