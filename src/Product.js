import React from 'react';
import './Product.css';
import Button from '@material-ui/core/Button';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price }) {

    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        //dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
            },
        });
    };

    return (
        <div className='product'>

            <img
                src={image}
                alt='Blue Tea'
            />
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
            </div>
            <Button
                className='btn'
                size='small'
                variant="contained"
                color="primary"
                onClick={addToBasket}>Add To Cart</Button>

        </div>
    );
}

export default Product;
