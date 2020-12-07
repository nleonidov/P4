import { useState } from 'react';
import './Yogurts.css';

export default function Yogurts(props) {
    const [flavors, setFlavors] = useState([])
    const [toppings, setToppings] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const fields = {
            flavors,
            toppings,
        };
    }

    return (
    <>
        <div className='order-container'>
                <h1 className='yotw'> Yogurt of the Week! </h1>
                    <h2 className='flav-name'>Strawberry Drift</h2>
                    <p className='ingred'>Ingredients: heavy cream, whole milk, sugar, strawberry slices, and vanilla.</p>
                    <img id='strawb' src='/assets/strawb.jpeg'/>
        </div>
    </>
    )
}