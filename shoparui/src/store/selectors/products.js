import { createSelector } from 'reselect';

const domain = (state) => state;

export const selectProducts = () => createSelector(
  domain,
  (substate) => substate.products.allproducts,
);