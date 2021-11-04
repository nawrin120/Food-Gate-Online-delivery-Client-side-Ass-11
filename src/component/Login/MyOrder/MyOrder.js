import React from 'react';
import './MyOrder.css'

const MyOrder = (props) => {
    console.log(props)
    const { item, img, price, _id

    } = props.order

    return (
        <div className="col">
            <div class="card">
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{item}</h5>
                    <p class="card-text">Price : {price}</p>
                </div>
                <div class="card-footer">
                    <button className='log-icon my-1' onClick={() => { props.handleDeleteItem(_id) }}><i className="fas fa-trash"></i> Remove Order</button>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;