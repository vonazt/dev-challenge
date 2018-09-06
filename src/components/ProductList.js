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

const SUPPLIERS_QUERY = gql`
  {
    allUsers {
      name
      id
      products {
        name
        price
        id
      }
    }
  }
`;



class ProductList extends Component {
  state = {
    pickedSupplier: '',
    pickedProduct: ''
  }

  render() {
    const { pickedSupplier, pickedProduct } = this.state;
    return (
      <Query query={SUPPLIERS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>;
          if (error) return <div>Error</div>;

          const suppliersToRender = data.allUsers;
          return (
            <div>
              <div className="field column is-half-mobile is-half-desktop is-half-tablet">
                <label className="label">Supplier</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      value={pickedSupplier}
                      onChange={(e) => {
                        this.setState({ pickedSupplier: e.target.value });
                      }}
                    >
                      <option disabled value="">
                        Pick supplier
                      </option>
                      {suppliersToRender.map(supplier =>
                        <option key={supplier.id} data-id={supplier.id}>{supplier.name}</option>
                      )}
                    </select>
                    <div>{pickedSupplier && suppliersToRender.includes(pickedSupplier)}</div>
                  </div>
                </div>
              </div>
              {this.state.pickedSupplier && <div className="field column is-half-mobile is-half-desktop is-half-tablet">
                <label className="label">Product</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      value={pickedProduct}
                      onChange={(e) => this.setState({ pickedProduct: e.target.value })}>
                      <option disabled value="">
                        Pick product
                      </option>
                      {suppliersToRender.map(supplier =>
                        supplier.name === pickedSupplier && supplier.products.map(product =>
                          <option key={product.id}>{product.name}</option>
                        )
                      )}
                    </select>
                  </div>
                </div>
              </div>}
              {this.state.pickedProduct &&
                <div>
                  {suppliersToRender.map(supplier =>
                    supplier.name === pickedSupplier && supplier.products.map(product =>
                      product.name === pickedProduct && <div key={product.id}>{product.price}</div>
                    )
                  )}
                </div>}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default ProductList;
