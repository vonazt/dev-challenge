import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const SUPPLIERS_QUERY = gql`
{
  allUsers {
    name
    id
  }
}
`;

const SINGLE_SUPPLIER_QUERY = gql`
  query SingleSupplierQuery($id: ID!)
  {
    user(id: $id) {
      products {
        name
        id
      }
    }
  }
`;

const PRODUCT_PRICE_QUERY = gql`
  query ProductPriceQuery($id: ID!)
  {
    product(id: $id) {
      price
    }
  }
`;



class ProductList extends Component {
  state = {
    pickedSupplier: '',
    pickedProduct: ''
  }

  render() {
    const { pickedSupplier, pickedProduct, supplierId, productId } = this.state;
    return (
      <div>
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
                          const selectedIndex = e.target.options.selectedIndex;
                          const supplierId = e.target.options[selectedIndex].getAttribute('data-id');
                          this.setState({ pickedSupplier: e.target.value, supplierId: supplierId});
                        }}
                      >
                        <option disabled value="">
                          Pick supplier
                        </option>
                        {suppliersToRender.map(supplier =>
                          <option key={supplier.id} data-id={supplier.id}>{supplier.name}</option>
                        )}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            );
          }}
        </Query>
        {pickedSupplier && <Query query={SINGLE_SUPPLIER_QUERY} variables={{ id: supplierId }}>
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>;
            if (error) return <div>Error</div>;

            const productsToRender = data.user[0].products;
            return (
              <div>
                <div className="field column is-half-mobile is-half-desktop is-half-tablet">
                  <label className="label">Products</label>
                  <div className="control">
                    <div className="select is-fullwidth">
                      <select
                        value={pickedProduct}
                        onChange={(e) => {
                          const selectedIndex = e.target.options.selectedIndex;
                          const productId = e.target.options[selectedIndex].getAttribute('data-id');
                          this.setState({ pickedProduct: e.target.value, productId: productId });
                        }}
                      >
                        <option disabled value="">
                          Pick product
                        </option>
                        {productsToRender.map(product =>
                          <option key={product.id} data-id={product.id}>{product.name}</option>
                        )}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            );
          }}
        </Query>}
        {pickedProduct && <Query query={PRODUCT_PRICE_QUERY} variables={{ id: productId }}>
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>;
            if (error) return <div>Error</div>;

            const product = data.product[0];
            return (
              <div>
                <p>It costs {product.price}</p>
              </div>
            );
          }}
        </Query>}
      </div>
    );
  }
}

export default ProductList;
