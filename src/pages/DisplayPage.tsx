// DisplayPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const DisplayPage: React.FC = () => {
    const location = useLocation();
    const { tokenValue } = location.state;

    return (
        <div>
            <h1>トークンの表示</h1>
            <p>トークン値: {tokenValue}</p>
        </div>
    );
};

export default DisplayPage;
