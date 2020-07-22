import React, { useContext } from "react";
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer} from './Collection.style'

import CollectionItem from "../../components/collection-item/CollectionItem.component";
import CollectionsContext from "../../contexts/collections/Collections.context";
import Spinner from "../../components/with-spinner/Spinner.component";

const CollectionPage = ({match}) => {
  const collections = useContext(CollectionsContext);
  if(collections) {
  const collection = collections[match.params.collectionId];
  const { title, items } = collection;
  return (
      <CollectionPageContainer>
        <CollectionTitle >{title}</CollectionTitle>
        <CollectionItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
        </CollectionItemsContainer>
      </CollectionPageContainer>
    );
        }else{
          return(
            <Spinner/>
          )
        }
  };

  export default CollectionPage;