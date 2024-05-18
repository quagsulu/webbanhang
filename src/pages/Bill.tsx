import React from 'react';
import './css/Bill.css';

function BillPage() {
    return (
        <div className="bill-container">
            <h2 className="bill-title">Your Bill</h2>
            <div className="bill-items">
                <div className="bill-item">
                    <p className="item-name">Grilled Salmon</p>
                    <p className="item-price">$10.99</p>
                </div>
                <div className="bill-item">
                    <p className="item-name">Caesar Salad</p>
                    <p className="item-price">$8.99</p>
                </div>
            </div>
            <div className="bill-total">
                <h3>Total: $19.98</h3>
            </div>
        </div>
    );
}

export default BillPage;
