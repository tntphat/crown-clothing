import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions'


import {
    CollectionItemContainer,
    CollectionFooterContainer,
    AddButton,
    BackgroundImage,
    NameContainer,
    PriceContainer
  } from './collection-item.styles';

const CollectionItem = ({item, addItem}) => (
    <CollectionItemContainer className='collection-item'>
        <BackgroundImage
            className='image'
            imageUrl={item.imageUrl}
        />

        <CollectionFooterContainer className='collection-footer'>
            <NameContainer>{item.name}</NameContainer>
            <PriceContainer>{item.price}$</PriceContainer>
        </CollectionFooterContainer>

        <AddButton onClick={() => addItem(item)}>ADD TO CART</AddButton>
    </CollectionItemContainer>
)

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null ,mapDispatchToProps)(CollectionItem);