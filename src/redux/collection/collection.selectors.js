import { createSelector } from 'reselect';

const selectCollection = state => state.collections;

export const selectCatalog = createSelector(
  [selectCollection],
  collection => collection.collections.catalog
);

export const selectVillagers = createSelector(
  [selectCollection],
  collection => collection.collections.villagers
);

export const selectJournal = createSelector(
  [selectCollection],
  collection => collection.collections.journal
);