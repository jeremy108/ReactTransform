import React from 'react';
import ReactDOM from 'react-dom';


import MenuFilter from './MenuBar/MenuFilter.jsx';
import TypeView from './MenuBar/TypeView.jsx';
import FormClerk from './MenuBar/FormClerk.jsx';
import SearchInput from './MenuBar/SearchInput.jsx';
 
class MenuBar extends React.Component{
  	render(){
		return (
			<div>
				<MenuFilter/>
				<div className="col-defg-container">
					<TypeView/>
					<FormClerk/>
					<SearchInput/>
				</div>
		   	</div>
	  	);
  	}
}

export default MenuBar;

