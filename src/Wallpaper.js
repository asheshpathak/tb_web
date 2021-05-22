import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Wallpaper.css';

function Wallpaper() {
    return (
        <div className='wallpaper'>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="Assets\PicsArt_03-07-02.38.46.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="Assets\PicsArt_03-07-02.40.10-01.jpeg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="Assets\20210301_070252-01 (1).jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Wallpaper;
