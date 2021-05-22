import React from 'react';
import './Footer.css';
import { Link, Redirect } from 'react-router-dom';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

function Footer() {
    return (

        <footer className='page-footer'>
            <div className='container-fluid footer'>
                <div className='row'>
                    <div className='col-md-4 col-sm-12  offset-md-2'>
                        <div>Tems of Service</div>
                        <div>Returns and Refunds</div>
                    </div>
                    <div className='col-lg-4 col-sm-12 offset-md-2'>
                        <div>Privacy Policy</div>
                        <div>Careers with us</div>
                    </div>
                </div>
                <div className='row'>
                    <div class='col-sm-12 d-flex justify-content-center'>
                        <a class='contact' href='https://www.instagram.com/tribalbasket/?hl=en'>  <InstagramIcon /> </a>
                        <a class='contact' href='https://m.facebook.com/profile.php?id=115218263720147&ref=content_filter'><FacebookIcon /></a>
                        <a class='contact' href='mailto:tribalbasket@gmail.com'> <EmailIcon /></a>
                        <a class='contact' href='http://wa.me/+917898051695'><WhatsAppIcon /></a>
                    </div>
                </div>
                <div className='row'>
                    <div class='col-sm-12 d-flex justify-content-center'>
                        <span> <img
                            alt="navbar navbar-brand logo"
                            src="Assets\Tribal_Basket_Packaging_and_Logo_Assets-02.png"
                            height="50vw"
                            width="50vw"
                            className=" mr-2 login__logo p-1" /></span>

                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer


{/* <div className='footer'>
<div className='copy__name'>
    <h5>&copy; Clone by : Divyanshu</h5>
</div>

<div className='footer__icons'>
    <InstagramIcon />
    <TwitterIcon />
    <EmailIcon />
</div>

</div> */}
