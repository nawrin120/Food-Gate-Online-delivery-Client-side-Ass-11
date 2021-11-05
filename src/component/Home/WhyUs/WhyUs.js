import React from 'react';
import './WhyUs.css'
const whyUs = () => {
    return (
        <div className='safety-container'>
            <small className='mt-5'>WHY CHOOSE US</small>
            <h2>Because we care about your safety</h2>

            <div className="row safety-body">
                <div className="col-sm-6 mt-4">
                    <div className="card">
                        <div className="card-body safety">
                            <div> <i className="fas fa-head-side-mask"></i></div>
                            <div>
                                <p>Ensuring</p>
                                <p> Mask</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mt-4">
                    <div className="card">
                        <div className="card-body safety">
                            <div><i className="fas fa-phone-volume"></i></div>
                            <div>
                                <p>24/7</p>
                                <p> Support</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6  mt-4">
                    <div className="card">
                        <div className="card-body safety">
                            <div><i className="fas fa-pump-soap"></i></div>
                            <div>
                                <p>Sanitising Hands</p>
                                <p>Equipment</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6  my-4">
                    <div className="card">
                        <div className="card-body safety">
                            <div><i className="fas fa-hands-wash"></i></div>
                            <div>
                                <p>Ensuring </p>
                                <p>Gloves</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='safe-img'>
                <img src="https://i.ibb.co/L8Nbryy/mask.jpg" alt="" />
            </div>
        </div>
    );
};

export default whyUs;