import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'

// import Direcciones from './Direcciones';
// <Direcciones name="Manuel" drones="4" posicionInicial="0,0"/>
import Drones from './paginas/Drones'
import Home from './paginas/Home'
import Layout from './paginas/Layout';
import NotFound from './paginas/NotFound'


function App() {
 
  return (
    <BrowserRouter>
        <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/drones/' component={Drones} />
          <Route component={NotFound} />
        </Switch>
        </Layout>
    </BrowserRouter>
    
  );
}

export default App;