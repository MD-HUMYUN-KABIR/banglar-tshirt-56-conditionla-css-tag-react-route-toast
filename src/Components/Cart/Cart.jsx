import React from 'react';
import Tshirt from '../Tshirt/Tshirt';
import './Cart.css'

const Cart = ({cart, removeItem}) => {
    let message ;
    if(cart.length === 0){
        message = "please add to cart"
    }
    else{
        message = "thanks"
    }
    return (
        <div>
           <h2 className={cart.length === 2 ? "red" : 'blue'}>order {cart.length}</h2>  
            {
               cart.map(tshirt => <p key={tshirt._id}>{tshirt.name} 
                
                <button className={`color ${cart.length === 4 ? 'blue border' : 'purple border-green'}`} onClick={()=>removeItem(tshirt._id)}>x</button></p>)
            }
           
              <p>{message}</p>  
              {cart.length >= 1 ? <p> {cart.length} ta add korcho ternary operator </p> : <p> kichu add korba ? ternary operator </p>}
              {cart.length === 2 && <p>2 ta add hoyeche logical && </p>}
              {cart.length ===2 || <p> 2 ta hoy ni logical || </p>}
           
        </div>
    );
};

export default Cart;

/* 
conditional rendering
1. use if else to set a variable that will contain an element , component
2. ternary operator : condition ? "for true" : "for false"
3. logical &&: (if the condition is true then exicuted)
4. logical || : (if the condition is false then exicuted)
*/

//conditional css
/* 
1. use ternary
2. ternary inside template string

*/