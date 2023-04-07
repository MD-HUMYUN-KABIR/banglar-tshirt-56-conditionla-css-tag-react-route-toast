import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../GrandPa/GrandPa';

const Uncle = () => {
    const [money , setMoney] = useContext(MoneyContext);
    return (
        <div>
            <p>uncle</p>
            <p> <small>grandpa money: {money}</small></p>
            <button onClick={()=> setMoney(money + 1000)}>1000 tk</button>
            <section className='flex'>
                <Cousin> nabil</Cousin>
                <Cousin>nabila</Cousin>
            </section>
        </div>
    );
};

export default Uncle;