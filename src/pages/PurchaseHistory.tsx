// import React from 'react';
import './css/PurchaseHistory.css';

function PurchaseHistory() {
    return (
        <div className="purchase-history-container">
            <h2 className="purchase-history-title">Purchase History</h2>
            <div className="purchase-history-list">
                <div className="purchase-item">
                    <div className="item-details">
                        <p className="item-name">Grilled Salmon</p>
                        <p className="purchase-date">Purchased on: Jan 12, 2024</p>
                    </div>
                    <p className="item-price">$10.99</p>
                </div>
                <div className="purchase-item">
                    <div className="item-details">
                        <p className="item-name">Caesar Salad</p>
                        <p className="purchase-date">Purchased on: Jan 10, 2024</p>
                    </div>
                    <p className="item-price">$8.99</p>
                </div>
            </div>
        </div>
    );
}

export default PurchaseHistory;
