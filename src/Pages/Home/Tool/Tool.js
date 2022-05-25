import React from 'react';
import { Link } from 'react-router-dom';
import "./Tool.css";

const Tool = ({tool,setProduct}) => {
    const {name,img,available,minimum,supplier,price,description} = tool;

    return (
        <div className='tool border-end rounded'>
            <img src={img} alt="" />
            <h2>Name: {name}</h2>
            <p>Price: {price}</p>
            <p>Available Quantity: {available}</p>
            <p>Minimum Quantity: {minimum}</p>
            <p>Supplier: {supplier}</p>
            <p><small>Description: {description}</small></p>
            <Link to="/purchase">
            <button onClick={()=>setProduct(tool)}  className='btn btn-info'>Purchase</button>

            </Link>

        </div>
    );
};

export default Tool;