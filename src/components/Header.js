import React from 'react'
import MainNav from './MainNav'
import TopBanner from './TopBanner'
import '../css/Header.scss'
import { FiShoppingCart, FiUserPlus, FiSearch } from "react-icons/fi";

const Header = () => {
    return (
        <header className='Header'>
            <TopBanner />
            <div className='gnb'>
                <h1>
                    <a href="/">
                        <img src={process.env.PUBLIC_URL + '/assets/img/top_logo.png'} alt="" />
                    </a>
                </h1>
                <nav className='inner'>
                    <MainNav />
                </nav>
                <ul className="rt">
                    <li><FiUserPlus /></li>
                    <li>
                        <FiShoppingCart />
                        <span>0</span>
                    </li>
                    <li><FiSearch /></li>
                </ul>
            </div>
        </header>
    )
}

export default Header