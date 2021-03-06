import React, { Component } from 'react';
import AllSuppliers from './AllSuppliers';
import SupplierProducts from './SupplierProducts';
import ProductPrice from './ProductPrice';

class ProductList extends Component {
  state = {
    pickedSupplier: '',
    pickedProduct: ''
  }

  handleSupplierChange = (e) => {
    if (this.state.pickedProduct) this.setState({ pickedProduct: '' });
    const selectedIndex = e.target.options.selectedIndex;
    const supplierId = e.target.options[selectedIndex].getAttribute('data-id');
    this.setState({ pickedSupplier: e.target.value, supplierId: supplierId});
  }

  handleProductChange = (e) => {
    const selectedIndex = e.target.options.selectedIndex;
    const productId = e.target.options[selectedIndex].getAttribute('data-id');
    this.setState({ pickedProduct: e.target.value, productId: productId });
  }

  render() {
    const { pickedSupplier, pickedProduct, supplierId, productId } = this.state;
    return (
      <div>
        <h3 className="title is-3">Use the dropdowns to find out price info on wongles</h3>
        <AllSuppliers pickedSupplier={pickedSupplier} handleChange={this.handleSupplierChange} />

        <SupplierProducts pickedSupplier={pickedSupplier} pickedProduct={pickedProduct} handleChange={this.handleProductChange} supplierId={supplierId} />

        <ProductPrice pickedProduct={pickedProduct} pickedSupplier={pickedSupplier} productId={productId} />
      </div>
    );
  }
}

export default ProductList;
