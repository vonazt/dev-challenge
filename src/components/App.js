import React, { Component } from 'react';
import ProductList from './ProductList';
import CreateProduct from './CreateProduct';
import Navbar from './Navbar';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return(
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/products/new" component={CreateProduct} />
        </Switch>
      </div>
    );
  }
}

export default App;
