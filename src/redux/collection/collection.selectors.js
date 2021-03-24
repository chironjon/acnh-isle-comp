import { createSelector } from 'reselect';

const selectCollection = state => state.collections;

export const selectCatalog = createSelector(
  [selectCollection],
  collections => collections.collections.catalog
);

export const selectVillagers = createSelector(
  [selectCollection],
  collections => collections.collections.villagers
);