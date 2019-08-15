import React from 'react';
//Needed for grabbing root element?
import ReactDOM from 'react-dom';
import './index.css';
//1.Import our component
import App from './App';
import * as serviceWorker from './serviceWorker';

//2.Render our component

//root is a div id in index.html
//we don't have any html in index.html, everything is rendered
//within the root element which is div id

//This helps so you don't have to grab all the elements in the 
//html page separately, it's all contained in one file
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
