import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div>
            <h2>Welcome to Food Gate</h2>
            <img src="images/lg.png" alt="" />
            <div className="row row-cols-1 row-cols-md-2 g-4 mt-4">
                <div className="card ">
                    <div className="col  mx-auto">
                        <h2>Contact</h2>
                        <p>Phone:0248567</p>
                        <p>Cell:083478584</p>
                        <p>Cell:083478556</p>
                        <p>Cell:083478599</p>
                        <p>Email:adg@gmail.com</p>
                    </div>
                </div>


                <div className="card  mt-4">
                    <div className="col mx-auto contact-input ">
                        <h2>Wnat to Contact With Us?</h2>
                        <h3> Please Send a mail</h3>

                        <form >
                            <input type="text" placeholder='Name' />
                            <input type="number" placeholder='Phone' />
                            <input type="email" placeholder='Email' />
                            <input type="button" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;