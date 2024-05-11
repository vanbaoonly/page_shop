import React from 'react';
import "./Feedback.scss"

const Feedback = () => {
    return (
        <div className='feedback container'>
            <h2>Feedback Form</h2>
            <form id="feedbackForm" action="/submit-feedback" method="post">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>

                <input type="submit" value="Submit" />
            </form>
        </div>
    )
};

export default Feedback;