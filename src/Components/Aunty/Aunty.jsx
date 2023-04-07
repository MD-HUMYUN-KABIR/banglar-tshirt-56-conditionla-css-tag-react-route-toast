import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = () => {
    return (
        <div>
            <p>aunty</p>
            <section className='flex'>
                <Cousin>abir</Cousin>
                <Cousin hasfriend={true}>nabir</Cousin>
            </section>
        </div>
    );
};

export default Aunty;