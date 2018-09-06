import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const PRODUCT_PRICE_QUERY = gql`
  query ProductPriceQuery($id: ID!)
  {
    product(id: $id) {
      price
    }
  }
`;

const ProductPrice = ({ pickedProduct, pickedSupplier, productId }) => {
  return (
    <div>
      {pickedProduct && <Query query={PRODUCT_PRICE_QUERY} variables={{ id: productId }}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>;
          if (error) return <div>Error</div>;

          const product = data.product[0];
          return (
            <div>
              <p>The {pickedProduct} from {pickedSupplier} costs £{product.price}</p>
            </div>
          );
        }}
      </Query>}
    </div>
  );
};

export default ProductPrice;
