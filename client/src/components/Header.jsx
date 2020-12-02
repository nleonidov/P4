import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
        <div className='main-header'>
            <h1>Soft Swerve</h1>
            <div className='main-links'>
                    <div className='rev-link'><Link to='/reviews'>Reviews</Link></div>
                    <div className='order-link'><Link to='/yogurts'>Order Now</Link></div>
            </div>
            <hr />
        </div>
    )
}