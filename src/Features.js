import './Features.css';
import EcoIcon from '@material-ui/icons/Eco';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import HouseIcon from '@material-ui/icons/House';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';


import React from 'react'

function Features() {
    return (
        <div className='container'>
            <div className='row'>
                <div className=' col col-md-4 col-sm-12'>
                    <LocalFloristIcon className='icon' fontSize="large" />
                    <div class='heading' >
                        Natural
                    </div>
                    <br />
                    <div class='content'>
                        Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an
                        unknown printer took a galley of
                        type and scrambled it to make a type
                        specimen book.
                    </div>
                </div>
                <div className='col-md-4 col-sm-12'>
                    <HouseIcon className='icon' fontSize="large" />
                    <div class='heading' >
                        Homegrown
                    </div>
                    <br />
                    <div class='content'>
                        Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an
                        unknown printer took a galley of
                        type and scrambled it to make a type
                        specimen book.
                    </div>
                </div>
                <div className='col-md-4 col-sm-12'>
                    <EcoIcon className='icon' fontSize="large" />
                    <div class='heading' >
                        Sustainable
                    </div>
                    <br />
                    <div class='content'>
                        Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an
                        unknown printer took a galley of
                        type and scrambled it to make a type
                        specimen book.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
