import React, { Component } from 'react';
import ProductList from './ProductList';
import CreateProduct from './CreateProduct';
import Navbar from './Navbar';
import Login from './Login';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return(
      <div>
        <div>
          <Navbar />
        </div>
        <section className="section">
          <div className="container">
            <Switch>
              <Route exact path="/" component={ProductList} />
              <Route exact path="/products/new" component={CreateProduct} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
