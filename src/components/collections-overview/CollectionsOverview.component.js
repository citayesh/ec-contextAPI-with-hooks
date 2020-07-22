import React, { useContext } from 'react';
import {CollectionsOverviewContainer } from './CollectionsOverview.style';
import CollectionPreview from '../collection-preview/Collection-preview.component';
import CollectionsContext from '../../contexts/collections/Collections.context';
import Spinner from '../with-spinner/Spinner.component';

function CollectionsOverview (){
  const collectionsMap = useContext(CollectionsContext);
  if(collectionsMap){
    const collections = Object.keys(collectionsMap).map(
      key => collectionsMap[key]
    );  
  return(  
  <CollectionsOverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionsOverviewContainer>
)
    }else{
return(
  <Spinner/>
)
    }
  
}

export default CollectionsOverview;