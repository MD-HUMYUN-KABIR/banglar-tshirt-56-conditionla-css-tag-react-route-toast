import React, { useContext } from 'react';
import { MoneyContext } from '../GrandPa/GrandPa';

const Sister = () => {
    const m = useContext(MoneyContext);
    return (
        <div>
            <p>sister</p>
            <p><small>{m}</small></p>
        </div>
    );
};

export default Sister;