import React from 'react'
import { Link } from 'react-router-dom';
import MainCategory from './MainCategory';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const CategorySlider = ({ shopList, category }) => {
    const Mainlist = shopList.filter(it => category === it.cate);
    return (
        <section className='shopList-- sc'>
            <div className='inner'>
                <Slider
                    arrows={false}
                    slidesToShow={5}
                >
                    {
                        Mainlist.map(it => {
                            return (
                                <figure key={it.id}>

                                    <div className="box">
                                        <img src={it.src} alt="" />
                                    </div>
                                    <div className='name'> <Link to={'/shopItem/' + it.id}>{it.name}</Link></div>
                                    <div className='des'>{it.des.substring(0, 100)} ...</div>
                                    <div className='price'><span>{it.price.toLocaleString()}</span> 원</div>

                                </figure>
                            )
                        })
                    }
                </Slider>
            </div>
        </section>
    )
}

export default CategorySlider