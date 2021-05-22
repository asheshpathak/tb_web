import React from 'react'

function validateInfo(values) {
    const mail = values.email;
    const pwd = values.password;
    let errors = {}

    if (!values.email) {
        errors.email = 'Email Required'
    }
    else if (!mail.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.(in|com|org)$/)) {
        errors.email = 'Email Address is invalid'
    }
    if (!values.password) {
        errors.password = 'password is required'
    } else if (!pwd.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/)) {
        errors.password = 'password should contain one upper case letter, one lower case letter, one special character and should be at least 6 characters long'
    }
    return errors;
}

export default validateInfo;
