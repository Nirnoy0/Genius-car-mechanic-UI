import React from 'react';
import './AddService.css';
import axios from 'axios';
import { useForm } from "react-hook-form";


const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/services', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Added Successfully');
                reset();
            }
        })
    }
    return (
        <div className="add-service">
            <h3>Please Add Service</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} 
                    placeholder="Enter Name"/>
                <textarea {...register("description")} 
                    placeholder="Description"/>
                <input type="number" {...register("price")} 
                    placeholder="Price"/>
                <input {...register("img")} 
                    placeholder="Image URL"/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;