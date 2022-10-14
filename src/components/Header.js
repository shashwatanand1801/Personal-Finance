import React from 'react';
import '../style/Header.css'

const App = () => (
    <div className='heading'>
        <h1 style={
            {
                color: 'white',
                fontWeight: 'bold',
                marginTop: '.5rem'
            }
        }>
            Personal Finance Tracker
        </h1>
    </div>
);

export default App;
