import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import eachExample from './examples/each';
import mapExample from './examples/map';
import reduceExample from './examples/reduce';
import findExample from './examples/find';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// eachExample();
// mapExample();
// reduceExample();
findExample();