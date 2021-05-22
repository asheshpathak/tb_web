import React, { useEffect } from 'react';
import Navbarr from './Navbarr';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Footer from './Footer';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
// import Form from './Form';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    //it will only run once when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>', authUser);
      if (authUser) {
        //the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route path='/login'>
            <Login />
            <Footer />
          </Route>
          <Route path='/checkout'>
            <Navbarr />
            <Checkout />
            <Footer />
          </Route>
          <Route path='/'>
            <Navbarr />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
