import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import NavigationBar from './NavigationBar.jsx';
import Main from './Main.jsx';

class Page extends React.Component{
  	render(){
	  	return (
		  	<div>
  				<Header/>
		  		<div className="below-banner">
		 			<NavigationBar/>
		  			<Main/>
		  		</div>
		  	</div>		  
	  	);
 	}
}

export default Page;