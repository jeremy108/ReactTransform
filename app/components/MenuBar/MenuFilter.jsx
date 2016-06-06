import React from 'react';
import ReactDOM from 'react-dom';

class MenuFilter extends React.Component {
	constructor() {
	    super();
	}
	componentDidMount() {
		
        // "ARRANGED BY" DROPDOWN - PUTS CHECKMARK BESIDE CURRENT SELECTION
		var dropDown = document.querySelectorAll('.frame');
		var textDropDown=document.getElementById("columnName");
		Array.from(dropDown).forEach(link => {
		    link.addEventListener('click', function(event) {
				textDropDown.innerHTML="&nbsp"+link.innerHTML+"&nbsp;";
				var parent=link.parentNode;
				var check=parent.querySelectorAll("a");
				Array.from(check).forEach(classes => {
					classes.classList.remove('highlight-checkmarks');
				});
				link.classList.add('highlight-checkmarks');
		    });
		}); 
	}
  
  	render(){
	  	return (
			<div>		  
				<div className="col-b">
					<img className="page-icon-sm" src="images/files-sm.svg" alt="icon"/>
					<img className="page-icon-lg" src="images/files-lg.svg" alt="icon"/>
				</div>
				<div className="col-c">
					<h2><a href="system.html">System </a></h2> 
					<h2>&gt; Clerks</h2>
				    <div>
				       	<p>45 clerks arranged by&nbsp;</p>
						<section>
							<p id="columnName" className="arranged-1">Name &nbsp;</p>
							<p className="arranged-2">
								<img src="images/down-arrow.svg" alt=" "/>
								<img src="images/down-arrow-white.svg" alt=" "/>
							</p>
							<section className="dropdown-2">	
								<p>
									<a href="#" className="frame" id="trigger-name">Name</a>
									<a href="#" className="frame" id="trigger-username">Username</a>
									<a href="#" className="frame" id="trigger-domain">Domain</a>
									<a href="#" className="frame" id="trigger-userGroups">User Groups</a>
									<a href="#" className="frame" id="trigger-active">Active</a>
								</p>
							</section>
						</section>
					</div>
				</div> 	  
			</div>		   
	  	);
  	}
}

export default MenuFilter;

