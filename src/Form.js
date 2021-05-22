import React, { useState } from 'react';
import Login from './Login';
import { Redirect } from 'react-router';

function Form() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>
            <Login submitForm={submitForm} />
            {/* {!isSubmitted ? (<Login submitForm={submitForm} />) : (<Redirect to='/' />)} */}
        </>
    )
}

export default Form;
