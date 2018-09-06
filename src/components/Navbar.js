import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { AUTH_TOKEN } from '../constants';

class Navbar extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN);
    return(
      <nav className="navbar" aria-label="main-navigation">

        <div className="navbar-menu">
          <div className="navbar-end">
            <Link to="/" className="navbar-item">Product Info</Link>
            {authToken && <Link to="/products/new" className="navbar-item">Add Product</Link>}
            {authToken ? (
              <div className="navbar-item" onClick={() => {
                localStorage.removeItem(AUTH_TOKEN);
                this.props.history.push('/');
              }}
              >
                Logout
              </div>
            ) : (
              <Link className="navbar-item" to="/login">Login</Link>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
