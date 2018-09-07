import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';

const PRODUCT_SEARCH_QUERY =gql`
  query ProductSearchQuery($filter: String!, $orderBy: ProductOrderByInput) {
    search(filter: $filter, orderBy: $orderBy) {
      products {
        name
        price
        id
        suppliedBy {
          name
        }
      }
    }
  }
`;

class Search extends Component {

  state = {
    products: [],
    filter: ''
  }

  render() {
    return (
      <div className="columns is-multiline">
        <div className="field column is-two-thirds">
          <h3 className="label title is-3">Search our extensive wongle database</h3>
          <input
            className="input"
            onChange={e => this.setState({ filter: e.target.value })}
          />
          <button
            className="button search-button"
            onClick={() => this._executeSearch()}
          >
              Bring me wongles!
          </button>
        </div>
        <div className="column is-half">

          {this.state.products.length > 0 && <table className="table is-striped">
            <thead>
              <tr>
                <td><strong>Supplier</strong></td>
                <td><strong>Product</strong></td>
                <td><strong>Price (£)</strong></td>
              </tr>
            </thead>
            <tbody>
              {this.state.products.map(product =>
                <tr key={product.id}>
                  <td>{product.suppliedBy.name}</td><td>{product.name}</td><td>{product.price}</td>
                </tr>
              )}
            </tbody>
          </table>}
        </div>
      </div>
    );
  }
  _executeSearch = async () => {
    const { filter } = this.state;
    const orderBy = 'price_ASC';
    const result = await this.props.client.query({
      query: PRODUCT_SEARCH_QUERY,
      variables: { filter, orderBy }
    });
    const products = result.data.search.products;
    this.setState({ products });
  }
}

export default withApollo(Search);
