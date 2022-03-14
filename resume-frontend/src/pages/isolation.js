import React from 'react';
import Board from '../IsolationBoard/board';

const Isolation = () => {
    return (
        <div align='center'>
            <h1>ISOLATION</h1>
            <p>Click a square below to make your move</p>
            <Board />

        </div>
    );
}

export default Isolation;