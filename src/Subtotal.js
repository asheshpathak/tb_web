import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();

    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <Checkbox className='input'
                                checked={checked}
                                onChange={handleChange}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />This Order contains a gift
                        </small>

                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)} // Part of the homework
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />
            <Button className='btn' size='small' variant="contained" color="primary">Proceed to Checkout</Button>
        </div>
    )
}

export default Subtotal;

