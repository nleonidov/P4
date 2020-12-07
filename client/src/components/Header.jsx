import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
        <div className='main-header'>
            <div className='header'>
            <h1>Soft Swerve</h1>
            <div className='main-links'>
                <ul className='header-item'>
                    <li className='contactss'><Link to='/'><a>Contact</a></Link></li>
                    <li className='reviewss'><Link to='/reviews'><a>Reviews</a></Link></li>
                    <li className='orderss'><Link to='/yogurts'><a>Weekly Special</a></Link></li>
                    <li className='flavorss'><Link to='/'><a>Flavors</a></Link></li>
                </ul>
            </div>
            <hr />
            </div>
        </div>
    )
}