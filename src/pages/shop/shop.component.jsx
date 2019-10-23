import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import { selectCollection } from '../../redux/shop/shop.selector';

const ShopPage = ({ collection }) => (
    <div className='shop-page'>
        {collection.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collection: selectCollection
});

export default connect(mapStateToProps)(ShopPage);
