import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css'

const Items = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://nameless-basin-48332.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div id='items'>
            <h2>Our Delicious Items</h2>
            <div className="row row-cols-1 row-cols-md-3 px-4 g-4 ">
                {
                    items.map(item => <Item
                        key={item._id}
                        item={item}
                    ></Item>)
                }
            </div>

        </div>
    );
};

export default Items;