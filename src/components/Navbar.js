import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class Navbar extends Component {
  render() {
    return(
      <nav className="navbar" role="navigation" aria-label="main-navigation">

        <div className="navbar-menu">
          <div className="navbar-end">
            <Link to="/" className="navbar-item">All Products</Link>
            <Link to="/products/new" className="navbar-item">Add Product</Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
