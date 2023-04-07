import React from 'react';
import Friend from '../Friend/Friend';

const Cousin = ({children, hasfriend}) => {
    return (
        <div>
            <p>cousin</p>
            <p> <small>{children}</small> </p>
            {hasfriend && <Friend></Friend>}
        </div>
    );
};

export default Cousin;