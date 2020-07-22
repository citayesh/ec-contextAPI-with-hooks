import React ,{useEffect, useState} from "react";
import {ShopPageContainer} from "./ShopPage.style"
import { Route } from "react-router-dom";
import axios from 'axios';
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview.component";
import CollectionPage from "../collection/Collection.component";
import CollectionsContext from "../../contexts/collections/Collections.context";

function ShopPage({match}){
const [collections,setCollections]=useState();
useEffect(()=>{
  axios.get(`https://my-json-server.typicode.com/citayesh/product-api/SHOP_DATA`)
  .then(res => {
  setCollections(res.data)
 })}
,[])

return(

<CollectionsContext.Provider value={collections}>
<ShopPageContainer>
    <Route exact path={`${match.path}`} component={CollectionsOverview}/>
    <Route exact path={`${match.path}/:collectionId`} component={CollectionPage}/>
</ShopPageContainer>
</CollectionsContext.Provider> 
)
}
export default ShopPage;
