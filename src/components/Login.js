import React, { Component } from 'react';
import { AUTH_TOKEN } from '../constants';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`;

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;


class Login extends Component {
  state = {
    login: true,
    email: '',
    password: '',
    name: ''
  }

  render() {
    const { login, email, password, name } = this.state;

    return(
      <form>
        <h4 className="title is-4">{login ? 'Login' : 'Sign Up'}</h4>
        {!login && (
          <div className="field">
            <label className="name">Username</label>
            <input
              className="input"
              value={name}
              placeholder="Username"
              onChange={e => this.setState({ name: e.target.value })}/>
          </div>
        )}
        <div className="field">
          <label className="email">Email</label>
          <input
            className="input"
            value={email}
            placeholder="Email"
            onChange={e => this.setState({ email: e.target.value })}/>
        </div>
        <div className="field">
          <label className="password">Password</label>
          <input
            className="input"
            type="password"
            value={password}
            placeholder="Password"
            onChange={e => this.setState({ password: e.target.value })}/>
        </div>
        <div className="">
          <Mutation
            mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
            variables={{ email, password, name }}
            onCompleted={data => this._confirm(data)}
          >
            {mutation => (
              <div className="button login-button" onClick={mutation}>
                {login ? 'Login' : 'Create account'}
              </div>
            )}
          </Mutation>
          <br />
          <div
            className="button"
            onClick={() => this.setState({ login: !login })}
          >
            {login
              ? 'Need to create an account?'
              : 'Already have an account?'}
          </div>
        </div>
      </form>
    );
  }
  _confirm = async data => {
    const { token } = this.state.login ? data.login : data.signup;
    this._saveUserData(token);
    this.props.history.push('/');
  }

  _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token);
  }
}

export default Login;
