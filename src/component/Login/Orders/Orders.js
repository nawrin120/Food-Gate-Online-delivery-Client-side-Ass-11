import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import ManageOrder from '../ManageOrder/ManageOrder';
import MyOrder from '../MyOrder/MyOrder';

const Orders = () => {

    const { user } = useAuth()
    const [orders, setOrders] = useState([]);
    const [selected, setSelected] = useState([])

    useEffect(() => {
        fetch('https://nameless-basin-48332.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    useEffect(() => {
        const foundOrderd = orders.filter(order => order?.userName === user?.dispalyName)
        setSelected(foundOrderd)
    }, [orders])

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
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining)
                }

            })
    }





    return (
        <div className="">
            <div className="all-order">
                <h2 className='orders-title my-4'>My Orders</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4 px-4">
                    {
                        selected.map(order => <MyOrder

                            key={order._id}
                            order={order}
                            handleDeleteItem={handleDeleteItem}

                        ></MyOrder>)

                    }
                </div>
            </div>
        </div>
    );
};

export default Orders;