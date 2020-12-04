import { useState } from 'react'

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
            <button>Submit</button>
    </form>
    )
}
