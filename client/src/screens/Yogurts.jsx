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
            { props.yogurts.map(yogurt => (
                <>
                <h1> Yogurt of the Week! </h1>
                    <h2>{yogurt.name}</h2>
                    <h3>{yogurt.flavor.name}</h3>  
                    { yogurt.toppings.map(topping => (
                        <h3>{topping.name}</h3>
                    ))}
                </>
            ))}
            {/* <form onSubmit={handleSubmit}>
                <select>
                    <option>Choose your flavor!</option>
                    {props.flavors.map((flavor) => (
                        <option>
                            {flavor.name}
                        </option>
                    ))}
                </select>
                <select>
                    <option>Choose your toppings!</option>
                    {props.toppings.map((topping) => (
                        <option>
                            {props.topping.name}
                        </option>
                    ))}
                </select>
                <input
                    name='name'
                    type='text'
                    onChange={(e) => setFlavors(e.target.value)}
                />
            </form> */}
        </div>
    </>
    )
}