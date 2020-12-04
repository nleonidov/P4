import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import { getAllFlavors } from '../services/flavors';
import { getAllToppings } from '../services/toppings';
import Reviews from '../screens/Reviews';
import ReviewEdit from '../screens/ReviewEdit';
import ReviewCreate from '../screens/ReviewCreate';
import { destroyReview, postReview, putReview, getAllReviews } from '../services/reviews';



function Main(props) {
    const [flavors, setFlavors] = useState([]);
    const [toppings, setToppings] = useState([]);
    const [reviews, setReviews] = useState([]);
    const history = useHistory();

    useEffect(() => {
        const fetchFlavors = async () => {
            const flavorData = await getAllFlavors();
            setFlavors(flavorData);
        }
        const fetchToppings = async () => {
            const toppingData = await getAllToppings();
            setToppings(toppingData);
        }
        const fetchReviews = async () => {
            const reviewData = await getAllReviews();
            setReviews(reviewData);
        }
        fetchFlavors();
        fetchToppings();
        fetchReviews();
    }, [])

    const handleCreate = async (reviewData) => {
        const newReview = await postReview(reviewData);
        setReviews(prevState => [...prevState, newReview]);
        history.push('/reviews');
    }

    const handleUpdate = async (id, reviewData) => {
        const updatedReview = await putReview(id, reviewData);
        setReviews(prevState => prevState.map(review => {
            return review.id === Number(id) ? updatedReview : review
        }))
        history.push('/reviews');
    }

    const handleDelete = async (id) => {
        await destroyReview(id);
        setReviews(prevState => prevState.filter(review => review.id !== id))
    }

    return (
        <Switch>
            <Route path='/reviews/:id/edit'>
                <ReviewEdit reviews={reviews} handleUpdate={handleUpdate} />
            </Route>
            <Route path='/reviews/new'>
                <ReviewCreate handleCreate={handleCreate} />
            </Route>
            <Route path='/reviews'>
                <Reviews
                    reviews={reviews}
                    handleDelete={handleDelete}
                />
            </Route>
        </Switch>
    )
}

export default Main;