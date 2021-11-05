import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './AddItems.css'

const AddItems = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://nameless-basin-48332.herokuapp.com/items', data)
            .then(res => {
                alert('Item Added successfully')
                reset()
            })
    };
    return (
        <div className='item-add-container'>
            <div className='Items-addition'>
                <h2>You can Add an Item</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("img")} placeholder='Image Url' />
                    <input {...register("item", { required: true, maxLength: 50 })} placeholder='Item Name' />
                    <textarea {...register("descriptions")} placeholder='Description' />
                    <input type="text" {...register("time")} placeholder='Time' />
                    <input type="number" {...register("price")} placeholder='Cost' />
                    <input type="number" {...register("delevaryCost")} placeholder='Delivery Cost' />

                    <input type="Submit" className='fs-5 fw-bold' />
                </form>
            </div>
        </div>
    );
};

export default AddItems;