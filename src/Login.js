import { Link, useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import './Login.css';
import { auth } from './firebase';
import Button from '@material-ui/core/Button';

function Login() {
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        // firebase login shiz
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))

    }
    const register = e => {
        e.preventDefault();

        // firebase register shizz
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //it successfully created a new user with email
                console.log(auth);
                if (auth) {
                    history.push('/');
                }
            })
            .catch(error => alert(error.message))
    }

    return (


        <div className="section">
            <div className="container">
                <div className="row full-height justify-content-center">
                    <div className="col-12 text-center align-self-center py-5">
                        <div className="section pb-5 pt-5 pt-sm-2 text-center">
                            <h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
                            <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                            <label for="reg-log"></label>
                            <div className="card-3d-wrap mx-auto">
                                <div className="card-3d-wrapper">
                                    <div className="card-front">
                                        <div className="center-wrap">
                                            <div className="section text-center">
                                                <h4 className="mb-4 pb-3">Log In</h4>
                                                <div className="form-group">
                                                    <input type="email" name="email"
                                                        value={email}
                                                        className="form-style"
                                                        placeholder="Your Email"
                                                        id="logemail"
                                                        onChange={e => setEmail(e.target.value)} />
                                                    <i className="input-icon uil uil-at"></i>
                                                </div>
                                                <div className="form-group mt-2">
                                                    <input type="password" name="password"
                                                        className="form-style"
                                                        placeholder="Your Password"
                                                        value={password}
                                                        id="logpass"
                                                        onChange={e => setpassword(e.target.value)} />
                                                    <i className="input-icon uil uil-lock-alt"></i>
                                                </div>
                                                {/* <a href="#" className="btn mt-4">Login</a> */}
                                                <Button
                                                    onClick={signIn}
                                                    className='btn mt-4'
                                                    size='small'
                                                    variant="contained"
                                                    color="primary"
                                                >Login</Button>
                                                <p className="mb-0 mt-4 text-center">
                                                    {/* <a href="#0" className="link">Forgot your password?</a> */}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-back">
                                        <div className="center-wrap">
                                            <div className="section text-center">
                                                <h4 className="mb-4 pb-3">Sign Up</h4>

                                                <div className="form-group mt-2">
                                                    <input type="email" name="email"
                                                        className="form-style"
                                                        placeholder="Your Email"
                                                        value={email}
                                                        onChange={e => setEmail(e.target.value)}
                                                        id="logemail" autocomplete="none"
                                                    />
                                                    <i className="input-icon uil uil-at"></i>
                                                </div>
                                                <div className="form-group mt-2">
                                                    <input type="password" name="password"
                                                        className="form-style"
                                                        value={password}
                                                        onChange={e => setpassword(e.target.value)}
                                                        placeholder="Your Password"
                                                        id="logpass"
                                                        autocomplete="none" />
                                                    <i className="input-icon uil uil-lock-alt"></i>
                                                </div>
                                                {/* <a href="#" className="btn mt-4">submit</a> */}

                                                <Button
                                                    onClick={register}
                                                    className='btn mt-4'
                                                    size='small'
                                                    variant="contained"
                                                    color="primary"
                                                >Sign Up</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Login
