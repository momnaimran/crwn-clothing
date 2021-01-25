import {createSelector} from 'reselect';
import memoize from 'lodash.memoize';
const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop], shop=> shop.collection
);

export const selectCollectionsPreview = createSelector(
    [selectCollections], collection=> Object.keys(collection).map(key=> collection[key])
);
export const selectCollection=memoize((CollectionUrlParam) => createSelector(
          [selectCollections], 
          collection=>
          collection[CollectionUrlParam]
)); 