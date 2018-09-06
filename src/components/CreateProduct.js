import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const CREATE_PRODUCT_MUTATION = gql`
  mutation CreateProductMutation($name: String!, $price: Int!) {
    createProduct(name: $name, price: $price) {
      id
      name
      price
    }
  }
`;

class CreateProduct extends Component {
  state = {
    name: '',
    price: 0
  }

  render() {
    const { name, price } = this.state;
    return(
      <div>
        <form>
          <div className="columns is-multiline">
            <div className="field column is-half">
              <label className="label">Product Name</label>
              <input
                className="input"
                value={name}
                onChange={e => this.setState({ name: e.target.value })}
              />
            </div>
            <div className="field column is-half">
              <label className="label">Price</label>
              <input
                className="input"
                value={price}
                onChange={e => this.setState({ price: e.target.value })}
              />
            </div>
            <Mutation mutation={CREATE_PRODUCT_MUTATION} variables={{name, price}} >
              {createProductMutation => <button className="button" onClick={createProductMutation}>Submit</button>}
            </Mutation>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateProduct;
