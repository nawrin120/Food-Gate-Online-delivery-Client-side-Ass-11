import React from 'react';
import { Link } from 'react-router-dom';
import './item.css'

const Item = (props) => {
    const { img, item, time, delevaryCost, price, descriptions, _id } = props.item
    return (

        <div class="col">
            <div class="card h-100  item-container">
                <img src={img} className="card-img-top" alt="..." />

                <div class="card-body">
                    <h5 className="card-title item-title">{item}</h5>
                    <p className="card-text item-des">{descriptions}</p>
                    <p><small>Order Time : {time}</small></p>
                </div>

                <div class="card-footer item-footer">
                    <p className='item-cost'>Cost : {price}</p> <span>Delivery Cost : {delevaryCost}</span>

                    <Link to={`/placeorder/${_id}`}>
                        <button className='mb-3 booking-btn rounded-3'>Order Now</button>
                    </Link>
                </div>
            </div>







        </div>
    );
};

export default Item;