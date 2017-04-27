import React from 'react';
import ReactDOM from 'react-dom';
import {Header, Nav, Content, Footer} from './App';
import './index.css';



ReactDOM.render(
		<Header />,
		document.getElementById('header')
);

ReactDOM.render(
		<Nav />,
		document.getElementById('nav')
);

ReactDOM.render(
		<Content />,
		document.getElementById('content')
);

ReactDOM.render(
		<Footer />,
		document.getElementById('footer')
);
