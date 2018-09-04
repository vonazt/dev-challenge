import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {
  render() {
    const linksToRender = [
      {
        id: '1',
        name: 'Small Wongle',
        price: 2,
        suppliedBy: 'New Co Ltd'
      },
      {
        id: '2',
        name: 'Mini Wongle',
        price: 3,
        suppliedBy: 'Old Co Ltd'
      }
    ]

    return (
      <div>{linksToRender.map(product => <Product key={product.id} product={product} />)}</div>
    )
  }
}

export default ProductList;
