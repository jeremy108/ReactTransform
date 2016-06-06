import React from 'react';
import ReactDOM from 'react-dom';

class TypeView extends React.Component{
  	render(){
	  	return (
			<div className="col-d">	
				<a href="clerks-list.html">
					<p className="view-icon-current-page">
						<img src="images/list-view.svg" alt="List View"/>
						<img src="images/list-view2.svg" alt="List View"/>
					</p>
				</a>
				<a href="clerks-card-name.html">
					<p>
						<img src="images/card-view.svg" alt="Card View"/>
						<img src="images/card-view2.svg" alt="Card View"/>
					</p>
				</a>		
			</div> 
		);
  	}
}

export default TypeView;

