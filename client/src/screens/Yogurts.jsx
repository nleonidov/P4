import { useState } from 'react';

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
            <form onSubmit={handleSubmit}>
                <select>
                    <option>Choose a flavor!</option>
                    {props.flavors.map((flavor) => (
                        <option>
                            
                        </option>
                    ))}
                </select>
            <label htmlFor='name'>Order:</label>
                <input
                    name='name'
                    type='text'
                    onChange={(e) => setFlavors(e.target.value)}
                />
            </form>
        </div>
    </>
    )
}