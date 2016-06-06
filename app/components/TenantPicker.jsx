import React from 'react';
import ReactDOM from 'react-dom';

class TenantPicker extends React.Component{
  	render(){
	  	return (
			<div className="col-a">
				<p>
					<img src="images/hidalgo-logo.png" alt="County Logo"/>
					<img src="images/hidalgo-logo2.png" alt="County Logo"/>
				</p>
				<section>
					<h2>The county of</h2>
					<h1>HIDALGO</h1>
					<img src="images/chevron-down.svg" alt="Dn Arrow"/>
				</section>
				<section className="dropdown-3">
					<ul>
						<li><a href="#">Bexar County</a></li>
						<li><a href="#">Denton County</a></li>
						<li><a href="#">Hidalgo County</a></li>
						<li><a href="#">Hunt County</a></li>
						<li><a href="#">Panola County</a></li>
					</ul>
				</section>
			</div>
	
	  	);
 	}
}

export default TenantPicker;

