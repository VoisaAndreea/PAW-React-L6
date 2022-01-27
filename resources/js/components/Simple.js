// resources/js/components/Simple.js

import React from 'react';
import ReactDOM from 'react-dom';

export default function Simple() {
    return (
        <h1>Apasa pe buton!</h1>
    );
}

if (document.getElementById('simple')) {
    ReactDOM.render(<Simple />, document.getElementById('simple'));
}