import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './ReviewEdit.css';

export default function ReviewEdit(props) {
    const [formData, setFormData] = useState({
    name: '',
    content: '',
    rating: ''
    })
    const { id } = useParams();

    useEffect(() => {
    const prefillForm = () => {
        const review = props.reviews.find(review => review.id === Number(id));
        setFormData({
        name: review.name
        })
    }
    if (props.reviews.length){
        prefillForm();
    }
    }, [props.reviews])

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
            props.handleUpdate(id, formData);
        }}>
        <h3>Edit Review</h3>
            <div>
                <label> Name: 
                    <input
                        className='input-name'
                        type='text'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <input 
                    className='input-msg'
                    type='text'
                    name='content'
                    value={formData.content}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label> Rating:  
                    <input
                    className='rating-input' 
                    type='text'
                    name='rating'
                    value={formData.rating}
                    onChange={handleChange}
                    />
                </label>
            </div>
                <button className='review-submit'>Submit</button>
    </form>
    )
}
