import { createSelector } from 'reselect';

const selectInput = state => state.input;

export const selectSearchfield = createSelector(
  [selectInput],
  input => input.input.searchfield
)

export const selectFilter = createSelector(
  [selectInput],
  input => input.input.selectedFilter
)

export const selectFilterArray = createSelector(
  [selectInput],
  input => input.input.filterArray
)

export const selectCategory = createSelector(
  [selectInput],
  categories => categories.categories.selectedCategory
)

export const selectCatArray = createSelector(
  [selectInput],
  categories => categories.categories.categoryArray
)