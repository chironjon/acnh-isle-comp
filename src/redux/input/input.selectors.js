import { createSelector } from 'reselect';

const selectInput = state => state.input;

export const selectSearchfield = createSelector(
  [selectInput],
  input => input.filters.searchfield
)

export const selectFilter = createSelector(
  [selectInput],
  input => input.filters.selectedFilter
)

export const selectFilterArray = createSelector(
  [selectInput],
  input => input.filters.filterArray
)

export const selectCategory = createSelector(
  [selectInput],
  input => input.categories.selectedCategory
)

export const selectCatArray = createSelector(
  [selectInput],
  input => input.categories.categoryArray
)