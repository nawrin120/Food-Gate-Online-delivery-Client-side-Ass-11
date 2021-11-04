import React from 'react';
import './ManageOrder.css'
const ManageOrder = (props) => {
    const { item, img, price, _id, UserName, Phone

    } = props.order
    return (
        <div className="col">
            <div class="card">
                <img src={img} class="card-img-top" alt="..." />
                <div className='manage-info'>
                    <div>
                        <h5>{item}</h5>
                        <p>Price : {price}</p>
                    </div>
                    <div>
                        <h5>Name:{UserName}</h5>
                        <p>Phone:{Phone}</p>
                    </div>
                </div>
                <div class="card-footer">
                    <button className='log-icon my-1' onClick={() => { props.handleDeleteItem(_id) }}><i className="fas fa-trash"></i> Remove Order</button>
                </div>
            </div>
        </div>
    );
};

export default ManageOrder;