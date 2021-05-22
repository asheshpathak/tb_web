import React from 'react';
import './Checkout.css';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className='container'>
            <div className='row checkout'>
                <div className='checkout__left col-sm-12 col-md-6'>
                    <div>
                        <h3>Hello, {user ? user?.email.split("@")[0] : "Guest"}</h3>
                        <h2 className='checkout__title'>Your Shopping Cart</h2>

                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                            />
                        ))

                        }

                    </div>
                </div >
                <div className='checkout_right col-sm-12 col-md-4 offset-md-2'>
                    <Subtotal />
                </div>
            </div>

        </div>
    )
}

export default Checkout
