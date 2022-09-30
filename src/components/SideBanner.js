import React, { useState } from 'react';
import Customer from './Customer';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const SideBanner = () => {
    const [on, setOn] = useState(false);
    return (
        <div className={`SideBanner ${on ? 'on' : ''}`}>
            <Slider className='slide'
                arrows={false}
                autoplay={true}
                pauseOnHover={false}
            >
                <figure>
                    <img src={process.env.PUBLIC_URL + '/assets/img/main_m01.jpg'} alt="" />
                </figure>
                <figure>
                    <img src={process.env.PUBLIC_URL + '/assets/img/main_m02.jpg'} alt="" />
                </figure>
                <figure>
                    <img src={process.env.PUBLIC_URL + '/assets/img/main_m03.jpg'} alt="" />
                </figure>
            </Slider>
            <i className={`xi-angle-left  ${on ? 'on' : ''}`}
                onClick={() => setOn(!on)}
            ></i>
            <div className="case">
                <Customer />
            </div>
        </div>
    )
}

export default SideBanner