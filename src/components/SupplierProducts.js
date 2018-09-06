import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';


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

const SupplierProducts = ({ pickedSupplier, pickedProduct, supplierId, handleChange }) => {
  return(
    <div>
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
                      onChange={handleChange}
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
    </div>
  );
};

export default SupplierProducts;
