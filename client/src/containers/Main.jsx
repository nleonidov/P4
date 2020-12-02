import { useState, useEffect } from 'react';

import Yogurts from '../screens/Yogurts';
import Toppings from '../screens/Toppings';
import { getAllFlavors } from '../services/flavors';
import { getAllToppings } from '../services/toppings';
import Reviews from '../screens/Reviews';



function Main(props) {
    const [flavors, setFlavors] = useState([]);
    const [toppings, setToppings] = useState([]);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchFlavors = async () => {
            const flavorData = await getAllFlavors();
            setFlavors(flavorData);
        }
        const fetchToppings = async () => {
            const toppingData = await getAllToppings();
            setToppings(toppingData);
        }
        fetchFlavors();
        fetchToppings();
    }, [])

    return (
        <>
        <div>
        </div>

        <div>
        </div>
        </>
    )
}

export default Main;