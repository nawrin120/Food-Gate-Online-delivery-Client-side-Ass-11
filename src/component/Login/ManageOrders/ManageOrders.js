import React, { useEffect, useState } from 'react';
import ManageOrder from '../ManageOrder/ManageOrder';

const ManageOrders = () => {
    const [allOrders, setAllOrders] = useState([])


    useEffect(() => {
        fetch('https://nameless-basin-48332.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])

    const handleDeleteItem = (id) => {
        const url = `https://nameless-basin-48332.herokuapp.com/orders/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Do you want to delete this Item?')
                    const remaining = allOrders.filter(order => order._id !== id);
                    setAllOrders(remaining)
                }

            })
    }
    return (
        <div className="">
            <div className="all-order">
                <h2 className='orders-title my-4'>Manage All Order</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4 px-4">
                    {
                        allOrders.map(order => <ManageOrder
                            key={order._id}
                            order={order}
                            handleDeleteItem={handleDeleteItem}
                        ></ManageOrder>)

                    }
                </div>
            </div>
        </div>
    );
};

export default ManageOrders;