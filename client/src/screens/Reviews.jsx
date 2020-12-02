import { useState } from 'react';

import './Reviews.css'

export default function Reviews(props) {


    return (
    <>
        <div className='review-buttons'>
            <button className='edit-button'>Edit</button>
            <button className='delete-button'>Delete</button>
        </div>
        <form>
            <div>
                <label className='name-label'>Name:
                    <input
                        className='name-input'
                        type='text'
                        name='name'
                        placeholder='Name...'
                    >
                    </input>
                </label>
            </div>
            <div>
                <input
                    className='review-input'
                    type='text'
                    name='review'
                    placeholder='Leave a review...'
                >
                </input>
            </div>
            <button>Submit</button>
        </form>
    </>
    )
}

