import React from 'react';
import { useParams } from 'react-router-dom';
import CollectionItem from '../../components/collection-item';
import { useAppSelector } from '../../hooks/redux.hooks';
import { selectCollection } from '../../redux/shop/shop.selector';
import './styles.scss';

const CollectionPage: React.FC = () => {
  const { collectionId } = useParams();
  const collection = useAppSelector(selectCollection(collectionId));

  return (
    <div className="collection-page">
      <h2 className="title">{collection?.title}</h2>
      <div className="items">
        {collection?.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
