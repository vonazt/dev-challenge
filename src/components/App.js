import React, { Component } from 'react';
import Home from './pages/Home';
import ProductList from './products/ProductList';
import CreateProduct from './products/CreateProduct';
import Navbar from './common/Navbar';
import Login from './auth/Login';
import Search from './products/Search';
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
