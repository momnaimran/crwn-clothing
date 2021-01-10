import React from 'react';
import SHOP_DATA from './shopData.js';
import CollectionPreview from "../../components/collection-preview.component/collection-preview";
class Shop extends React.Component{
constructor(props)
{
   super(props);
   this.state={
       Collections: SHOP_DATA
   }
}
 render()
 {
    const {Collections} = this.state;
     return(
         <div className='shop-page'>
         {
             Collections.map(({id, ...othercollectionprops}) => (
                 <CollectionPreview key={id} {...othercollectionprops}/>
             ) )
         }
         </div>
     );
 }
}
export default Shop;