import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Sister = () => {
  const  [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h3>sister</h3>
            <p><small>grandpa money {money}</small></p>
        </div>
    );
};

export default Sister;