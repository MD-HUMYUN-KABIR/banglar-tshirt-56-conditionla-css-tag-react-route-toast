import React from 'react';
import './Tshirt.css'

const Tshirt = ({tshirt, handleAddToCart}) => {
    const {price, picture, name} = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <p>{name}</p>
            <button onClick={()=>handleAddToCart(tshirt)}> buy now</button>
        </div>
    );
};

export default Tshirt;