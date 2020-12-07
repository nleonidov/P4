import { useState } from 'react'
import './ReviewCreate.css';

export default function ReviewCreate(props) {
    const [formData, setFormData] = useState({
        name: '',
        content: '',
        rating: ''
    })

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
        ...prevState,
        [name]: value
    }))
    }

    return (
    <form onSubmit={(e) => {
        e.preventDefault();
        props.handleCreate(formData);
    }}>
        <h3>Create Review</h3>
            <div>
                <label className='name-label'>Name:
                    <input
                        className='name-input'
                        type='text'
                        name='name'
                        placeholder='Name...'
                        value={formData.name}
                        onChange={handleChange}
                    >
                    </input>
                </label>
            </div>
            <div>
                <input
                    className='review-input'
                    type='text'
                    name='content'
                    placeholder='Leave a review...'
                    value={formData.content}
                    onChange={handleChange}
                >
                </input>
            </div>
            <div>
                <label className='rating-label'> Rating:
                    <input
                        className='rating-input'
                        type='text'
                        name='rating'
                        placeholder='out of 5'
                        value={formData.rating}
                        onChange={handleChange}
                    >
                    </input>
                </label>
            </div>
            <button>Submit</button>
    </form>
    )
}
