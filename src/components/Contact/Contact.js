import React from 'react';
import './Contact.css'

const Contact = () => {
    return (


        <div className='contact'>


            <h1>CONTACT US FOR FREE CONSULTATION</h1>


            <div className="contact-inputs">


                <input type="text" placeholder='Name' />

                <input type="text" placeholder='Last Name' />

                <input type="text" placeholder='Email' />

                <input type="text" placeholder='Phone' />

                <textarea placeholder='Message' name="" id="" cols="30" rows="10"></textarea>
                <span className='span'>

                    <input type="text" placeholder="I'm interested in service" />

                    <span>

                        <input type="checkbox" name="" id="checkbox" />

                        <label htmlFor="checkbox">I agree that my submitted data is being collected and stored.</label>

                    </span>

                    <button>Submit</button>

                </span>
            </div>
        </div>
    );
};

export default Contact;