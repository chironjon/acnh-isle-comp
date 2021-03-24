import { createSelector } from 'reselect';

const selectOption = state => state.options;

export const selectCategory = createSelector(
  [selectOption],
  options => options.catalog.selectedCategory
)

export const selectSubcategory = createSelector(
  [selectOption],
  options => options.catalog.selectedSubcategory
)

export const selectCatArray = createSelector(
  [selectOption],
  options => options.catalog.categoryArray
)

export const selectSubcatArray = createSelector(
  [selectOption],
  options => options.catalog.subcategoryArray
)