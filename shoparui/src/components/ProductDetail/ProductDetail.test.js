import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductDetail from './ProductDetail';

const { products } = JSON.parse(JSON.stringify(require('../../dummyData/products')));

it('renders correctly', () => {
  render(<ProductDetail location={{ product: products[0] }} />);

  const element = screen.getByTestId('product-detail');
  expect(element).toBeInTheDocument();
})