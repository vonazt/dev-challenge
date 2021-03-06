import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { AUTH_TOKEN } from '../../constants';

class Navbar extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN);
    return(
      <nav className="navbar" aria-label="main-navigation">

        <div className="navbar-menu">
          <div className="navbar-end">
            <Link to="/" className="navbar-item">Wongle Home</Link>
            <Link to="/products" className="navbar-item">Wongle Info</Link>
            <Link to="/search" className="navbar-item">Search Wongles</Link>
            {authToken && <Link to="/products/new" className="navbar-item">Add Wongle</Link>}
            {authToken ? (
              <div className="navbar-item logout" onClick={() => {
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
