import React from 'react';
import ReactDOM from 'react-dom';

class SearchInput extends React.Component {
	constructor() {
		super();
	} 
	componentDidMount() {
		
      //onkeyup show X
		var input=document.getElementById("search");
		input.addEventListener('keyup', function(event) {
			var inputSubmit=document.getElementById("submit-search");
			if(input.value.length>0){
				inputSubmit.style.backgroundImage = 'url(images/x-to-close-2.svg)';
				inputSubmit.style.backgroundSize = '15px 15px';
			}
			else{
				inputSubmit.style.backgroundImage = 'url(images/search3.svg)';				
			}
		});
	}
	
  	render(){
	  	return (
			<div className="col-g">
				<form id="search-form" method="post" action=" " role="search">
					<input id="search" type="text" name="search"/>
					<input id="submit-search" type="button" value=" " onclick="searchResetText()"/>
					<input id="hidevalue" type="hidden" value="0" onclick="searchResetText()"/>
				</form>
			</div>
	  );
  }
}

export default SearchInput;

