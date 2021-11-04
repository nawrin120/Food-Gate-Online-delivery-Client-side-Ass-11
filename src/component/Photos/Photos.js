import React from 'react';
import './Photos.css'
const Photos = () => {
    return (
        <div className='photo-container'>
            <h2 className='photo-title'>Photo Albums</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">

                <div className="col">
                    <div className="card">
                        <img src="images/albums/1.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title photo-img-title">Price : 230</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="images/albums/2.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title photo-img-title">Price : 180</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="images/albums/3.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title photo-img-title">Price : 300</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="images/albums/4.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title photo-img-title">Price : 230</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="images/albums/5.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title photo-img-title">Price : 330</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="images/albums/6.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title photo-img-title">Price : 220</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="images/albums/7.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title photo-img-title">Price : 230</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="images/albums/8.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title photo-img-title">Price : 270</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="images/albums/9.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title photo-img-title">Price : 250</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="images/albums/10.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title photo-img-title">Price : 260</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="images/albums/11.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title photo-img-title">Price : 230</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="images/albums/12.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title photo-img-title">Price : 320</h5>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Photos;