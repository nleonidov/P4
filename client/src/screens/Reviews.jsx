import React from 'react';
import { Link } from 'react-router-dom';

import './Reviews.css'

export default function Reviews(props) {

    // const { reviews } = props;
    console.log(props.reviews)
    // const reviews = [];

    return (
    <>
        <Link to={'/reviews/new'}><button className='new-rev'>New Review</button></Link>
        <br />
            { 
                props.reviews.map(review => (
                    <React.Fragment key={review.id}>
                        <div className='label-div'>
                            <div className='form-name'>
                                <h2 className='name-form'>Name:</h2>
                                <p className='name-label'>{review.name}</p>
                            </div>
                            <div className='form-content'>
                                <h2 className='msg'>Message:</h2>
                                    <p className='content-label'>{review.content}</p>
                            </div>
                            <div className='form-rating'>
                                <h2 className='rate'>Rating:</h2>
                                    <p className='rating-label'>{review.rating}</p>
                            </div>
                        </div>
                            {
                                <div className='buttonz'>
                                    <Link to={`/reviews/${review.id}/edit`}><button className='rev-edit'>Edit</button></Link>
                                    <br />
                                    <button className='rev-delete' onClick={() => props.handleDelete(review.id)}>Delete</button>
                                </div>
                            }
                    </React.Fragment>
                ))
            }
    </>
    )
}

