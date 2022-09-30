import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MainCategory from './MainCategory'
import CategorySlider from './CategorySlider'

const MainTab = ({ shopList }) => {
    const link = [
        'pencil', 'liquid', 'powder'
    ];
    const [alink, setAlink] = useState(0);
    return (
        <section className='sc'>
            <h2>Best Product</h2>
            <ul className='bp_tab'>
                {
                    link.map((it, idx) => {
                        return <li onClick={() => setAlink(idx)}>{it}</li>
                    })
                }
            </ul>
            <CategorySlider shopList={shopList} category={link[alink]} />

        </section>
    )
}

export default MainTab