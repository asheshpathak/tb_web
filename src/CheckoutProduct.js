import { Button } from '@material-ui/core';
import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, title, price, image }) {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        //remove the item from a basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} />
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <Button
                    className='btn'
                    size='small'
                    variant="contained"
                    color="primary"
                    onClick={removeFromBasket}>Remove From Cart</Button>
            </div>
        </div>
    )
}

export default CheckoutProduct;
