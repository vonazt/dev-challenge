import React, { Component } from 'react';
import Product from './Product';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const PRODUCTS_QUERY = gql`
  {
    allProducts {
      name
      id
      price
      suppliedBy {
        name
        id
      }
    }
  }
`;

class ProductList extends Component {
  render() {
    return (
      <Query query={PRODUCTS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>;
          if (error) return <div>Error</div>;

          const productsToRender = data.allProducts;
          return (
            <div>
              {productsToRender.map(product => <Product key={product.id} product={product} />)}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default ProductList;
