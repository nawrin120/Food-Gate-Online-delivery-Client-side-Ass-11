import React, { useEffect, useState } from 'react';
import './PlaceOrder.css'
import { useParams } from 'react-router';
import axios from 'axios';
import './PlaceOrder.css'
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const PlaceOrder = () => {

    const { id } = useParams()
    const { user } = useAuth()

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [item, setItem] = useState([]);
    useEffect(() => {
        fetch(`https://nameless-basin-48332.herokuapp.com/items/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])


    const onSubmit = data => {
        console.log(data)
        const orderCollection = {
            ...data,
            ...item


        }
        delete orderCollection._id


        axios.post('https://nameless-basin-48332.herokuapp.com/orders', orderCollection)
            .then(res => {
                alert('Item Ordered successfully')
                reset()
            })
            .then(result => {
                if (result?.insertedId) {
                    alert('Order processed successfully');

                    reset()
                }

            })
    }



    return (
        <div className='w-75 mx-auto py-4'>
            <h2>Thank You : {user.displayName}</h2>
            <p>You are Ordering : {item.item}</p>
            <p>Please Give Your Infromation and click on submit Button.</p>
            <div className='row row-cols-1 row-cols-md-2 g-4 mt-4"'>
                <div className="col">
                    <div className='card'>
                        <img src={item.img} alt="" />
                        <h4 className='place-item'>{item.item}</h4>
                        <p><small>{item.descriptions}</small></p>
                        <p><small>Order Time : {item.time}</small></p>
                        <div className='place-form-price'>
                            <p>Price : {item.price}</p>
                            <p>Delivery Cost : {item.delevaryCost}</p>
                        </div>
                    </div>
                </div>
                <div className="card text-center form-container mt-4">
                    <div className="col mx-auto form-body">

                        <form className='placeorder-form mx-auto ' onSubmit={handleSubmit(onSubmit)}>

                            <input defaultValue={user.displayName} {...register("UserName", { required: true })} />
                            {errors.name && <span>This field is required</span>}
                            <input defaultValue={user.email} {...register("email", { required: true })} />
                            {errors.email && <span>This field is required</span>}
                            {errors.status && <span>This field is required</span>}

                            <input placeholder='Address'  {...register("address")} />
                            <input placeholder='Phone Number'  {...register("Phone")} />



                            <input className='form-place-btn' type="submit" />
                        </form>
                    </div>
                </div>


            </div>



        </div>
    );
};

export default PlaceOrder;