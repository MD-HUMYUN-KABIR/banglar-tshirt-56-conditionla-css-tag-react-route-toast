import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Special = () => {
    const angti = useContext(RingContext)
    return (
        <div>
            <p>special</p>
            <p> <small>{angti}</small></p>
        </div>
    );
};

export default Special;