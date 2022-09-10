import React, { Component } from 'react';
import { render } from 'react-dom';
import DevDotTo from './lib';
import './index.css';

class App extends Component {
	render() {
		return <DevDotTo username="genialkartik" darkMode={false} className="test" />;
	}
}
render(<App />, document.getElementById('root'));
