import React from 'react';
import Wallpaper from './Wallpaper';
import Product from './Product';
import Features from './Features';
import './Home.css';


function Home() {
    return (
        <div className='container home'>
            <div className='row'>
                <div className='col-md-10 col-sm-12 offset-md-1'>
                    <Wallpaper />
                </div>
            </div>
            <div className='row'>
                <Features />
            </div>
            <div className='row '>
                <div className='col-sm-12'>
                    <h2 className='heading'>Our Products</h2>
                </div>

                <div className='col-sm-12 col-md-6'>
                    <Product
                        title='Blue Tea(Butterfly Pea Flower)'
                        image='Assets\Blue tea 1.png'
                        price={200} />
                </div>
                <div className='col-sm-12 col-md-6'>
                    <Product
                        title='Blue Tea With Lemongrass'
                        image='Assets\Paper Coffee Bag Mockup 22.png'
                        price={220} />
                </div>
            </div>
        </div>
    )
}

export default Home
