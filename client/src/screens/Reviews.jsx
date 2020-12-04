import React from 'react';
import { Link } from 'react-router-dom';

import './Reviews.css'

export default function Reviews(props) {

    // const { reviews } = props;
    console.log(props.reviews)
    // const reviews = [];

    return (
    <>
        <Link to={'/reviews/new'}><button>New Review</button></Link>
        <br />
            { 
                props.reviews.map(review => (
                    <React.Fragment key={review.id}>
                        <label> 
                            Name: <p>{review.name}</p>
                        </label>
                        <label> Message: 
                            <p>{review.content}</p>
                        </label>
                        <label> Rating: 
                            <p>{review.rating}</p>
                        </label>
                            {
                                <>
                                    <Link to={`/reviews/${review.id}/edit`}><button>Edit</button></Link>
                                    <button onClick={() => props.handleDelete(review.id)}>Delete</button>
                                </>
                            }
                    </React.Fragment>
                ))
            }
    </>
    )
}

