import React from 'react';
import { render, screen } from '@testing-library/react';
import Products from './Products';

const { products } = JSON.parse(JSON.stringify(require('../../dummyData/products')));

it('should render products correctly', () => {
  render(<Products products={products} />);
  
  const element = screen.getByTestId('products-product-item-1');
  expect(element).toBeInTheDocument();

})