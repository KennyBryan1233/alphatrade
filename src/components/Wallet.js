import React from 'react';
import { useSelector } from 'react-redux';
import './Wallet.css';

const Wallet = () => {
    const walletBalance = useSelector((state) => state.balance);

    return (
        <div className="wallet-container">
            <h3>Wallet Balance</h3>
            <p className="wallet-balance">₹{walletBalance.toFixed(2)}</p>
        </div>
    );
};

export default Wallet;