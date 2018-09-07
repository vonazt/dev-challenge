import React from 'react';
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

const AllSuppliers = ({ pickedSupplier, handleChange }) => {
  return (
    <Query query={SUPPLIERS_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <div>Fetching</div>;
        if (error) return <div>Error</div>;

        const suppliersToRender = data.allUsers;
        return (
          <div>
            <div className="field column is-half">
              <label className="label">Supplier</label>
              <div className="control">
                <div className="select is-fullwidth">
                  <select
                    value={pickedSupplier}
                    onChange={handleChange}
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
  );
};

export default AllSuppliers;
