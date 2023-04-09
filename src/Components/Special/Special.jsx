import React, { createContext, useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    const ring = useContext(RingContext)
    return (
        <div>
            <h3>special</h3>
            <p><small>Ring : {ring}</small></p>
        </div>
    );
};

export default Special;