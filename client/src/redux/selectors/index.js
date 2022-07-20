import { createSelector } from "@reduxjs/toolkit";

export const selectorWithCatalog = (state) => state.catalog.value;
const selectFilterData = (state) => state.getBasket.data;

const selectorWithFilterData = createSelector(selectFilterData, (state) => {
  return state.filter((element, index) => {
    return (
      index ===
      state.findIndex((t) => {
        return t.type === element.type;
      })
    );
  });
});

export default selectorWithFilterData;
