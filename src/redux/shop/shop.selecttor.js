import {createSelector} from 'reselect';
import memoize from 'lodash.memoize';
const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop], shop=> shop.collection
);

export const selectCollectionsPreview = createSelector(
    [selectCollections], collection=> collection ? Object.keys(collection).map(key=> collection[key]) : []
);
export const selectCollection=memoize((CollectionUrlParam) => createSelector(
          [selectCollections], 
          collection=> (collection ? 
          collection[CollectionUrlParam]: null)
)); 
export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop=> shop.isFetching
);

export const selectIsCollectionsLoading = createSelector(
    [selectShop],
    shop => !!shop.collection  //hum janna chahtay hain kay collections load hue hay kay nai kbhe kbhe page reload kerain to nai hue hote collection load to !! use kerkay humain jo bhe cheez collection main hoge uskay according boolean value mil jaay ge
)