import React from 'react';
import './Spinner.css';

const spinner = () =>
(
    <div className="Spinner-Div">
    <p>Loading</p>
    <div className="loader">
        <p style={{ 'fontSize': "0.8rem" }}></p>
    </div>
    </div>
)

export default spinner;