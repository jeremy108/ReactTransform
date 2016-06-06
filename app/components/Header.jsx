import React from 'react';
import ReactDOM from 'react-dom';

import TenantPicker from './TenantPicker.jsx';
import MenuBar from './MenuBar.jsx';

class Header extends React.Component{
  	render(){
	  	return (
			<header className="header1 header2" role="banner">
		  		<TenantPicker/>
		  		<MenuBar/>  
			</header>
	  	);
  	}
}

export default Header;