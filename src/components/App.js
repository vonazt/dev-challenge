import React, { Component } from 'react';
import Home from './Home';
import ProductList from './ProductList';
import CreateProduct from './CreateProduct';
import Navbar from './Navbar';
import Login from './Login';
import Search from './Search';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return(
      <div>
        <div>
          <Navbar />
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <section className="section">
          <div className="container">
            <Switch>
              <Route exact path="/products/new" component={CreateProduct} />
              <Route exact path="/products" component={ProductList} />
              <Route exact path="/login" component={Login} />
              <Route exact path='/search' component={Search} />
            </Switch>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
