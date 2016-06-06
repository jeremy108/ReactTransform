import React from 'react';
import ReactDOM from 'react-dom';

class NavigationBar extends React.Component{
  	render(){
	  	return (
		  	<div>
				<nav role="navigation" className="page-nav">
					<ul>
						<li className="current-page">
		  					<a href="#">
		  						<img src="images/system.svg" alt=" "/>
		  						<span>
		  							<a href="system.html">System</a>
		  						</span>
		  					</a>
		  				</li>
					</ul>		
				</nav>
			</div>
	  	);
  	}
}

export default NavigationBar;