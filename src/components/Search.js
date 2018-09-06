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
      <div className="columns">
        <div className="field column is-half">
          <label className="label">Search</label>
          <input
            className="input"
            onChange={e => this.setState({ filter: e.target.value })}
          />
          <button
            className="button"
            onClick={() => this._executeSearch()}
          >
              Search
          </button>
        </div>
        <div className="column is-half">
          {this.state.products.map(product =>
            <p key={product.id}>{product.name}, Price: {product.price}, Supplier: {product.suppliedBy.name}</p>
          )}
        </div>
      </div>
    );
  }
  _executeSearch = async () => {
    const { filter } = this.state;
    const orderBy = 'name_ASC';
    const result = await this.props.client.query({
      query: PRODUCT_SEARCH_QUERY,
      variables: { filter, orderBy }
    });
    const products = result.data.search.products;
    this.setState({ products });
  }
}

export default withApollo(Search);
