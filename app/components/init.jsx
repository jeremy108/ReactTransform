import React from 'react';
import ReactDOM from 'react-dom';

import Page from './Page.jsx';

class Init extends React.Component{
  	render(){
	  	return (
			<Page/>  
	  	);
  	}
}

ReactDOM.render(
  	<Init/>,
  	document.getElementById('container')
);