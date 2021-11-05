import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div>
            <h1 className="mt-4">Welcome to <span className="naming">FoodGate</span> </h1>
            <h2 className='fs-4 fst-italic mb-4'>We would love to hear from you!</h2>
            <img src="images/lg.png" alt="" />
            <div className="row row-cols-1 row-cols-md-2 g-4 mt-4">
                <div className="card contact ">
                    <div className="col mt-4">
                        <h2>Having Issues? Contact Us</h2>
                        <h5></h5>
                        <p>Phone:0248567</p>
                        <p>Cell:083478584</p>
                        <p>Cell:083478556</p>
                        <p>Cell:083478599</p>
                        <p>Email:abc@gmail.com</p>
                    </div>
                    <div className='fs-4 fst-italic'>SOCIAL LINKS</div>
                  <div className='icons'>
                  <a href="https://www.facebook.com/"><i className="icons-item fab fa-facebook"></i></a>
                  <a href="https://www.youtube.com/"><i className="icons-item fab fa-youtube" id='youtube'></i></a>
                  <a href="https://twitter.com/"><i className="icons-item fab fa-twitter" id='twitter'></i></a>
                  </div>
                  <h2>Issue with your live order?</h2>
                  <p>
                  Click on the 'Support' or 'Online ordering help' section in your app to connect to our customer support team.
                  </p>
                </div>


                <div className="card  mt-4 contact">
                    <div className="col mx-auto contact-input ">
                        <h2>How Can We Help You?</h2>
                        <h3> Please Send a mail</h3>

                        <form className="mt-4 mb-4">
                            <input className="form-item mb-4" type="text" placeholder='Full-Name' />
                            <input className="form-item mb-4" type="number" placeholder='Mobile Number(optional)' />
                            <input className="form-item mb-4" type="email" placeholder='Email Address' />
                            <div className="input-group mb-4">
                         <textarea className="form-control" placeholder='Type Text'  aria-label="With textarea"></textarea>
                            </div>
                            <input className="form fs-5" type="button" value="Submit feedback" />
                        </form>
                    </div>
                </div>
            </div> <br />

        <div>

        </div>
        <div className="row row-cols-1 row-cols-md-2 g-4 mt-4">
                <div className="card ">
                    <div className="col  mx-auto mt-4 text-start">
                        <h1 className="main-name m-4">Who are we?</h1>
                        <p className='m-4'>
                        Launched in 2010, Our technology platform connects customers, restaurant partners and delivery partners, serving their multiple needs. Customers use our platform to search and discover restaurants, read and write customer generated reviews and view and upload photos, order food delivery, book a table and make payments while dining-out at restaurants. On the other hand, we provide restaurant partners with industry-specific marketing tools which enable them to engage and acquire customers to grow their business while also providing a reliable and efficient last mile delivery service. We also operate a one-stop procurement solution, which supplies high quality ingredients and kitchen products to restaurant partners. We also provide our delivery partners with transparent and flexible earning opportunities.
                        </p>
                    </div>
                </div>


                <div className="card  mt-4">
                    <div className="col mx-auto contact-input ">
                       <img className="side-mark w-75" src="https://b.zmtcdn.com/web/about/a7b0a36d5107f3590895981dab2eeac31563208212.jpeg?output-format=webp" alt="" />
                    </div>
                </div>
            </div> <br />
        </div>
    );
};

export default Contact;