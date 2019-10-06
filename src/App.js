import React, { Component } from 'react';
import './App.css';
import Headers from './common/js/Headers.js'
import Main from './common/js/Main.js'
import Banner from './common/js/Banner.js'
 
class App extends Component {
  render() {
    return (
	<div>
		<Headers></Headers>
		<Banner></Banner>
		
	</div>
	 
    );
  }
}

export default App;