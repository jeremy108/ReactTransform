import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component {
  
 	constructor() {
    	super();
 	}
	componentDidMount() {
	
	    // "ARRANGED BY" DROPDOWN - MARKS THE CURRENT SORT COLUMN WITH A BLUE ARROW
		var triggerName=document.getElementById("trigger-name");
		triggerName.addEventListener('click', function(event) {
			var nameColumnArranged=document.querySelectorAll('.arranged-1');
			nameColumnArranged.innerHTML="Name&nbsp;";
			var clerksTable=document.querySelectorAll('.clerks-table');
	 		Array.from(dropDown).forEach(clerksTable => {
	 			clerksTable.classList.remove('highlight');	
	 		}); 
			var firstColumn=document.querySelectorAll('.col-1');
			firstColumn.classList.add("highlight");
			firstColumn.classList.add("highlight1");
		});
		 
	 	var triggerUserName=document.getElementById("trigger-username");
	 	triggerUserName.addEventListener('click', function(event) {
	 		var nameColumnArranged=document.querySelectorAll('.arranged-1');
	 		nameColumnArranged.innerHTML="Username&nbsp;";
	 		var clerksTable=document.querySelectorAll('.clerks-table');
	  		Array.from(dropDown).forEach(clerksTable => {
	  			clerksTable.classList.remove('highlight');	
	  		}); 
	 		var firstColumn=document.querySelectorAll('.col-2');
	 		firstColumn.classList.add("highlight");
			firstColumn.classList.add("highlight2");
	 	 });
		 
	  	var triggerDomain=document.getElementById("trigger-domain");
	  	triggerDomain.addEventListener('click', function(event) {
	  		var nameColumnArranged=document.querySelectorAll('.arranged-1');
	  		nameColumnArranged.innerHTML="Domain&nbsp;";
	  		var clerksTable=document.querySelectorAll('.clerks-table');
	   		Array.from(dropDown).forEach(clerksTable => {
	   			clerksTable.classList.remove('highlight');	
	   		}); 
	  		var firstColumn=document.querySelectorAll('.col-3');
	  		firstColumn.classList.add("highlight");
	 		firstColumn.classList.add("highlight3");
	  	 });
		 
	   	var triggerUserGroup=document.getElementById("trigger-userGroups");
	   	triggerUserGroup.addEventListener('click', function(event) {
	   		var nameColumnArranged=document.querySelectorAll('.arranged-1');
	   		nameColumnArranged.innerHTML="User Groups&nbsp;";
	   		var clerksTable=document.querySelectorAll('.clerks-table');
	    	Array.from(dropDown).forEach(clerksTable => {
	    		clerksTable.classList.remove('highlight');	
	    	}); 
	   		var firstColumn=document.querySelectorAll('.col-4');
	   		firstColumn.classList.add("highlight");
	  		firstColumn.classList.add("highlight3");
	   	 });

	    // CLICKABLE COLUMN HEADINGS - MARKS THE CURRENT SORT COLUMN WITH A BLUE ARROW
	    var column1=document.querySelectorAll('.col-1'); 
		Array.from(column1).forEach(column => {   
	     	column.addEventListener('click', function(event) {
	    		var clerksTable=document.querySelectorAll('.clerks-table');
	     		Array.from(clerksTable).forEach(clerksTable => {
	     			clerksTable.classList.remove('highlight');	
	     		}); 
	    		var col1=document.getElementById('col1');
	    		col1.classList.add("highlight");
				col1.classList.add("highlight1");     
	    	 });
		});
		
	    var column2=document.querySelectorAll('.col-2'); 
		Array.from(column2).forEach(column => {   
	    	column.addEventListener('click', function(event) {
	   		 	var clerksTable=document.querySelectorAll('.clerks-table');
	    		Array.from(clerksTable).forEach(clerksTable => {
	    			clerksTable.classList.remove('highlight');	
	    		}); 
	   		 	var col1=document.getElementById('col2');
			 	col1.classList.add("highlight");
			 	col1.classList.add("highlight2");	     
	   	 	});
		});

	 	var column3=document.querySelectorAll('.col-3'); 
		Array.from(column3).forEach(column => {   
	 		column.addEventListener('click', function(event) {
				var clerksTable=document.querySelectorAll('.clerks-table');
	 		  	Array.from(clerksTable).forEach(clerksTable => {
	 				clerksTable.classList.remove('highlight');	
	 			}); 
			 	var col1=document.getElementById('col3');
			 	col1.classList.add("highlight");
			 	col1.classList.add("highlight3");   
		 	});
		});

	 	var column4=document.querySelectorAll('.col-4'); 
		Array.from(column4).forEach(column => {   
	 		column.addEventListener('click', function(event) {
				var clerksTable=document.querySelectorAll('.clerks-table');
	 		  	Array.from(clerksTable).forEach(clerksTable => {
	 				clerksTable.classList.remove('highlight');	
	 			}); 
			 	var col1=document.getElementById('col4');
			 	col1.classList.add("highlight");
			 	col1.classList.add("highlight4");    
		 	});
		});
	}
  
  	render(){
	  	var spanStyle = {
	    	position:'right',
	 	};
	  
		return (
			<main role="main" className="list-view">
				<div>
					<img src="images/checkmark2.svg" alt="checkmark"/>
					<span id="create-message">New Clerk “Elizabeth Davis” was created.</span>
					<span id="undo1"><a href="#">Undo</a></span>
					<img src="images/x-to-close-3.svg" alt="X to close"/>
				</div>
				<table id="myTable">
					<thead>
						<tr>
							<th id="col1" className="col-1 clerks-table">NAME</th>
							<th id="col2" className="col-2 clerks-table">USERNAME</th>
							<th id="col3" className="col-3 clerks-table">DOMAIN</th>
							<th id="col4" className="col-4 clerks-table">USER GROUPS</th>
							<th id="col5" className="col-5 clerks-table">ACTIVE</th>
							<th id="col5" className="col-6 clerks-table"></th>
						</tr>
					</thead>
					<tbody id="fbody">
						<tr>
							<td className="ce-menu2">Amabely Rodriguez 
							<span style={spanStyle}></span>
							</td>
							<td>amabely.rodriguez</td>
							<td>HIDALGOCC</td>
							<td>Satellite Office</td>
							<td><img src="images/checkmark1.svg" alt=" "/></td>
							<td className="ce-menu">
								<img src="images/down-arrow-3.svg" alt=" "/>
								<img src="images/down-arrow-3a.svg" alt=" "/>
								
							</td>
						</tr>
						<tr>
							<td className="ce-menu2">Bazan
							<span style={spanStyle}></span>
							</td>
							<td>bazan</td>
							<td>HIDALGOCC</td>
							<td>Vitals Admin</td>
							<td><img src="images/checkmark1.svg" alt=" "/></td>
							<td className="ce-menu">
								<img src="images/down-arrow-3.svg" alt=" "/>
								<img src="images/down-arrow-3a.svg" alt=" "/>
								
							</td>
						</tr>
						<tr>
							<td className="ce-menu2">Berenize Alvarado
							<span style={spanStyle}></span>
							</td>
							<td>berenize.alvarado</td>
							<td>HIDALGOCC</td>
							<td>Global Admin</td>
							<td><img src="images/checkmark1.svg" alt=" "/></td>
							<td className="ce-menu">
								<img src="images/down-arrow-3.svg" alt=" "/>
								<img src="images/down-arrow-3a.svg" alt=" "/>
								
							</td>
						</tr>
						<tr>
							<td className="ce-menu2">Davis Moore
							<span style={spanStyle}></span>
							</td>
							<td>davis.moore</td>
							<td>KOFILE</td>
							<td>Real Property Admin</td>
							<td><img src="images/checkmark1.svg" alt=" "/></td>
							<td className="ce-menu">
								<img src="images/down-arrow-3.svg" alt=" "/>
								<img src="images/down-arrow-3a.svg" alt=" "/>
								
							</td>
						</tr>
						<tr>
							<td className="ce-menu2">Debbie Keller
							<span style={spanStyle}></span>
							</td>
							<td>debbie.keller</td>
							<td>HIDALGOCC</td>
							<td>Vitals Group</td>
							<td><img src="images/checkmark1.svg" alt=" "/></td>
							<td className="ce-menu">
								<img src="images/down-arrow-3.svg" alt=" "/>
								<img src="images/down-arrow-3a.svg" alt=" "/>
								
							</td>
						</tr>
						<tr>
							<td className="ce-menu2">Diana Ortiz
							<span style={spanStyle}></span>
							</td>
							<td>diana.ortiz</td>
							<td>HIDALGOCC</td>
							<td>Vitals Group</td>
							<td><img src="images/checkmark1.svg" alt=" "/></td>
							<td className="ce-menu">
								<img src="images/down-arrow-3.svg" alt=" "/>
								<img src="images/down-arrow-3a.svg" alt=" "/>
								
							</td>
						</tr>
						<tr>
							<td className="ce-menu2">Elaine Acuna
							<span style={spanStyle}></span>
							</td>
							<td>elaine.acuna</td>
							<td>HIDALGOCC</td>
							<td>Satellite Office</td>
							<td><img src="images/checkmark1.svg" alt=" "/></td>
							<td className="ce-menu">
								<img src="images/down-arrow-3.svg" alt=" "/>
								<img src="images/down-arrow-3a.svg" alt=" "/>
								
							</td>
						</tr>
						<tr>
							<td className="ce-menu2">Elisa Castillo
							<span style={spanStyle}></span>
							</td>
							<td>elisa.castillo</td>
							<td>HIDALGOCC</td>
							<td>Real Property</td>
							<td><img src="images/checkmark1.svg" alt=" "/></td>
							<td className="ce-menu">
								<img src="images/down-arrow-3.svg" alt=" "/>
								<img src="images/down-arrow-3a.svg" alt=" "/>
								
							</td>
						</tr>
						<tr>
							<td className="ce-menu2">Felix Leon</td>
							<td>felix.leon</td>
							<td>KOFILE</td>
							<td>Real Property Admin</td>
							<td><img src="images/checkmark1.svg" alt=" "/></td>
							<td className="ce-menu">
								<img src="images/down-arrow-3.svg" alt=" "/>
								<img src="images/down-arrow-3a.svg" alt=" "/>
							
							</td>
						</tr>
						<tr>
							<td className="ce-menu2">Gonzalez</td>
							<td>gonzalez</td>
							<td>HIDALGOCC</td>
							<td>Vitals Group</td>
							<td><img src="images/checkmark1.svg" alt=" "/></td>
							<td className="ce-menu">
								<img src="images/down-arrow-3.svg" alt=" "/>
								<img src="images/down-arrow-3a.svg" alt=" "/>
								
							</td>
						</tr>
						<tr>
							<td className="ce-menu2">kofile.user1 Y RPClerk</td>
							<td>kofile.user1</td>
							<td>HIDALGOCC</td>
							<td>Vitals Group</td>
							<td><img src="images/checkmark1.svg" alt=" "/></td>
							<td className="ce-menu">
								<img src="images/down-arrow-3.svg" alt=" "/>
								<img src="images/down-arrow-3a.svg" alt=" "/>
								
							</td>
						</tr>
						<tr>
							<td className="ce-menu2">Imelda Leal</td>
							<td>imelda.leal</td>
							<td>HIDALGOCC</td>
							<td>Real Property</td>
							<td><img src="images/checkmark1.svg" alt=" "/></td>
							<td className="ce-menu">
								<img src="images/down-arrow-3.svg" alt=" "/>
								<img src="images/down-arrow-3a.svg" alt=" "/>
								
							</td>
						</tr>
						<tr>
							<td className="ce-menu2">Joseph Perkins</td>
							<td>joseph.perkins</td>
							<td>KOFILE</td>
							<td>Real Property Admin</td>
							<td><img src="images/checkmark1.svg" alt=" "/></td>
							<td className="ce-menu">
								<img src="images/down-arrow-3.svg" alt=" "/>
								<img src="images/down-arrow-3a.svg" alt=" "/>
								
							</td>
						</tr>
						<tr>
							<td className="ce-menu2">Kofile Hidalgo</td>
							<td>kofile.hidalgo</td>
							<td>HIDALGOCOUNTY</td>
							<td>Global Admin</td>
							<td><img src="images/checkmark1.svg" alt=" "/></td>
							<td className="ce-menu">
								<img src="images/down-arrow-3.svg" alt=" "/>
								<img src="images/down-arrow-3a.svg" alt=" "/>
								
							</td>
						</tr>
						<tr>
							<td className="ce-menu2">Kofile Systems</td>
							<td>kofile.systems</td>
							<td>HIDALGOCOUNTY</td>
							<td>Vitals Admin</td>
							<td><img src="images/checkmark1.svg" alt=" "/></td>
							<td className="ce-menu">
								<img src="images/down-arrow-3.svg" alt=" "/>
								<img src="images/down-arrow-3a.svg" alt=" "/>
								
							</td>
						</tr>
						<tr>
							<td className="ce-menu2">Kofile Temp</td>
							<td>kofile.temp</td>
							<td>HIDALGOCOUNTY</td>
							<td>Real Property Admin</td>
							<td><img src="images/checkmark1.svg" alt=" "/></td>
							<td className="ce-menu">
								<img src="images/down-arrow-3.svg" alt=" "/>
								<img src="images/down-arrow-3a.svg" alt=" "/>
								
							</td>
						</tr>
						<tr>
							<td className="ce-menu2">kofile.user VitalsAdmin</td>
							<td>kofile.user.vitalsadmin</td>
							<td>HIDALGOCOUNTY</td>
							<td>Vitals Admin</td>
							<td><img src="images/checkmark1.svg" alt=" "/></td>
							<td className="ce-menu">
								<img src="images/down-arrow-3.svg" alt=" "/>
								<img src="images/down-arrow-3a.svg" alt=" "/>
								
							</td>
						</tr>
						<tr>
							<td className="ce-menu2">kofile.user2 VitalsClerk</td>
							<td>kofile.user2.vitalsclerk</td>
							<td>HIDALGOCOUNTY</td>
							<td>Vitals Group</td>
							<td><img src="images/checkmark1.svg" alt=" "/></td>
							<td className="ce-menu">
								<img src="images/down-arrow-3.svg" alt=" "/>
								<img src="images/down-arrow-3a.svg" alt=" "/>
								
							</td>
						</tr>
						<tr>
							<td className="ce-menu2">kofile.user5</td>
							<td>kofile.user5</td>
							<td>HIDALGOCOUNTY</td>
							<td>Vitals Admin</td>
							<td><img src="images/checkmark1.svg" alt=" "/></td>
							<td className="ce-menu">
								<img src="images/down-arrow-3.svg" alt=" "/>
								<img src="images/down-arrow-3a.svg" alt=" "/>
							
							</td>
						</tr>
						<tr>
							<td className="ce-menu2">Laura Whaley</td>
							<td>laura.whaley</td>
							<td>KOFILE</td>
							<td>Real Property Admin</td>
							<td><img src="images/checkmark1.svg" alt=" "/></td>
							<td className="ce-menu"> 
								<img src="images/down-arrow-3.svg" alt=" "/>
								<img src="images/down-arrow-3a.svg" alt=" "/>
								
							</td>
						</tr>
						<tr>
							<td className="ce-menu2">Maria Ana De Leon</td>
							<td>mariaana.deleon</td>
							<td>HIDALGOCC</td>
							<td>Vitals Group</td>
							<td><img src="images/checkmark1.svg" alt=" "/></td>
							<td className="ce-menu">
								<img src="images/down-arrow-3.svg" alt=" "/>
								<img src="images/down-arrow-3a.svg" alt=" "/>
								
							</td>
						</tr>
						<tr>
							<td className="ce-menu2">Mary Cuellar</td>
							<td>mary.cuellar</td>
							<td>HIDALGOCC</td>
							<td>Vitals Admin</td>
							<td><img src="images/checkmark1.svg" alt=" "/></td>
							<td className="ce-menu">
								<img src="images/down-arrow-3.svg" alt=" "/>
								<img src="images/down-arrow-3a.svg" alt=" "/>
								
							</td>
						</tr>
						<tr>
							<td className="ce-menu2">Mary Lou Cantu</td>
							<td>mary.lou.cantu</td>
							<td>HIDALGOCC</td>
							<td>Real Property</td>
							<td><img src="images/checkmark1.svg" alt=" "/></td>
							<td className="ce-menu">
								<img src="images/down-arrow-3.svg" alt=" "/>
								<img src="images/down-arrow-3a.svg" alt=" "/>
								
							</td>
						</tr>
						<tr>
							<td className="ce-menu2">McAllen Admin</td>
							<td>mcallen.admin</td>
							<td>HIDALGOCC</td>
							<td>Satellite Admin</td>
							<td><img src="images/checkmark1.svg" alt=" "/></td>
							<td className="ce-menu">
								<img src="images/down-arrow-3.svg" alt=" "/>
								<img src="images/down-arrow-3a.svg" alt=" "/>
								
							</td>
						</tr>
						<tr>
							<td className="ce-menu2">McAllen Clerk</td>
							<td>mcallen.clerk</td>
							<td>HIDALGOCC</td>
							<td>Satellite Office</td>
							<td><img src="images/checkmark1.svg" alt=" "/></td>
							<td className="ce-menu">
								<img src="images/down-arrow-3.svg" alt=" "/>
								<img src="images/down-arrow-3a.svg" alt=" "/>
								
							</td>
						</tr>
						<tr>
							<td className="ce-menu2">Monett Jasso</td>
							<td>monett.jasso</td>
							<td>HIDALGOCC</td>
							<td>Vitals Group</td>
							<td><img src="images/checkmark1.svg" alt=" "/></td>
							<td className="ce-menu">
								<img src="images/down-arrow-3.svg" alt=" "/>
								<img src="images/down-arrow-3a.svg" alt=" "/>
								
							</td>
						</tr>
						<tr>
							<td className="ce-menu2">Noah Lopez</td>
							<td>noah.lopez</td>
							<td>HIDALGOCOUNTY</td>
							<td>Real Property Admin</td>
							<td><img src="images/checkmark1.svg" alt=" "/></td>
							<td className="ce-menu">
								<img src="images/down-arrow-3.svg" alt=" "/>
								<img src="images/down-arrow-3a.svg" alt=" "/>
								
							</td>
						</tr>
						<tr>
							<td className="ce-menu2">Nolin Naidoo</td>
							<td>nolin.naidoo</td>
							<td>KOFILE</td>
							<td>Satellite Admin</td>
							<td><img src="images/checkmark1.svg" alt=" "/></td>
							<td className="ce-menu">
								<img src="images/down-arrow-3.svg" alt=" "/>
								<img src="images/down-arrow-3a.svg" alt=" "/>
								
							</td>
						</tr>
						<tr>
							<td className="ce-menu2">Pete Diaz</td>
							<td>pete.diaz</td>
							<td>HIDALGOCC</td>
							<td>Satellite Office</td>
							<td><img src="images/checkmark1.svg" alt=" "/></td>
							<td className="ce-menu">
								<img src="images/down-arrow-3.svg" alt=" "/>
								<img src="images/down-arrow-3a.svg" alt=" "/>
								
							</td>
						</tr>
						<tr>
							<td className="ce-menu2">Public Station</td>
							<td>public.station</td>
							<td>HIDALGOCC</td>
							<td>Real Property</td>
							<td><img src="images/checkmark1.svg" alt=" "/></td>
							<td className="ce-menu">
								<img src="images/down-arrow-3.svg" alt=" "/>
								<img src="images/down-arrow-3a.svg" alt=" "/>
								
							</td>
						</tr>
						<tr>
							<td className="ce-menu2">Public User 25</td>
							<td>public.user.25</td>
							<td>HIDALGOCC</td>
							<td>Real Property</td>
							<td><img src="images/checkmark1.svg" alt=" "/></td>
							<td className="ce-menu">
								<img src="images/down-arrow-3.svg" alt=" "/>
								<img src="images/down-arrow-3a.svg" alt=" "/>
								
							</td>
						</tr>
						<tr>
							<td className="ce-menu2">Real Property Admin</td>
							<td>real.property.admin</td>
							<td>HIDALGOCC</td>
							<td>Real Property Admin</td>
							<td><img src="images/checkmark1.svg" alt=" "/></td>
							<td className="ce-menu">
								<img src="images/down-arrow-3.svg" alt=" "/>
								<img src="images/down-arrow-3a.svg" alt=" "/>
								
							</td>
						</tr>
						<tr>
							<td className="ce-menu2">Real Property Clerk</td>
							<td>real.property.clerk</td>
							<td>HIDALGOCC</td>
							<td>Real Property</td>
							<td><img src="images/checkmark1.svg" alt=" "/></td>
							<td className="ce-menu">
								<img src="images/down-arrow-3.svg" alt=" "/>
								<img src="images/down-arrow-3a.svg" alt=" "/>
								
							</td>
						</tr>
						<tr>
							<td className="ce-menu2">Rene Salinas</td>
							<td>rene.salinas</td>
							<td>HIDALGOCC</td>
							<td>Real Property</td>
							<td><img src="images/checkmark1.svg" alt=" "/></td>
							<td className="ce-menu">
								<img src="images/down-arrow-3.svg" alt=" "/>
								<img src="images/down-arrow-3a.svg" alt=" "/>
								
							</td>
						</tr>
						<tr>
							<td className="ce-menu2">Samuel Lopez</td>
							<td>samuel.lopez</td>
							<td>HIDALGOCC</td>
							<td>Real Property Admin</td>
							<td><img src="images/checkmark1.svg" alt=" "/></td>
							<td className="ce-menu">
								<img src="images/down-arrow-3.svg" alt=" "/>
								<img src="images/down-arrow-3a.svg" alt=" "/>
								
							</td>
						</tr>
						<tr>
							<td className="ce-menu2">San Francisco Office</td>
							<td>san.francisco.office</td>
							<td>KOFILE</td>
							<td>Real Property Admin</td>
							<td><img src="images/checkmark1.svg" alt=" "/></td>
							<td className="ce-menu">
								<img src="images/down-arrow-3.svg" alt=" "/>
								<img src="images/down-arrow-3a.svg" alt=" "/>
								
							</td>
						</tr>
						<tr>
							<td className="ce-menu2">Sandra Rivera</td>
							<td>sandra.rivera</td>
							<td>HIDALGOCC</td>
							<td>Vitals Group</td>
							<td><img src="images/checkmark1.svg" alt=" "/></td>
							<td className="ce-menu">
								<img src="images/down-arrow-3.svg" alt=" "/>
								<img src="images/down-arrow-3a.svg" alt=" "/>
								
							</td>
						</tr>
						<tr>
							<td className="ce-menu2">Super Admin</td>
							<td>super.admin</td>
							<td>HIDALGOCC</td>
							<td>Global Admin</td>
							<td><img src="images/checkmark1.svg" alt=" "/></td>
							<td className="ce-menu">
								<img src="images/down-arrow-3.svg" alt=" "/>
								<img src="images/down-arrow-3a.svg" alt=" "/>
							
							</td>
						</tr>
						<tr>
							<td className="ce-menu2">Tania Rivera</td>
							<td>tania.rivera</td>
							<td>HIDALGOCC</td>
							<td>Real Property</td>
							<td><img src="images/checkmark1.svg" alt=" "/></td>
							<td className="ce-menu">
								<img src="images/down-arrow-3.svg" alt=" "/>
								<img src="images/down-arrow-3a.svg" alt=" "/>
								
							</td>
						</tr>
						<tr>
							<td className="ce-menu2">Test Account</td>
							<td>test.account</td>
							<td>vanguard-dev</td>
							<td>Real Property Admin</td>
							<td><img src="images/checkmark1.svg" alt=" "/></td>
							<td className="ce-menu">
								<img src="images/down-arrow-3.svg" alt=" "/>
								<img src="images/down-arrow-3a.svg" alt=" "/>
								
							</td>
						</tr>
						<tr>
							<td className="ce-menu2">Untitled</td>
							<td>untitled</td>
							<td>HIDALGOCC</td>
							<td>Vitals Group</td>
							<td><img src="images/checkmark1.svg" alt=" "/></td>
							<td className="ce-menu">
								<img src="images/down-arrow-3.svg" alt=" "/>
								<img src="images/down-arrow-3a.svg" alt=" "/>
								
							</td>
						</tr>
						<tr>
							<td className="ce-menu2">Vitals Admin</td>
							<td>vitals.admin</td>
							<td>HIDALGOCC</td>
							<td>Vitals Admin</td>
							<td><img src="images/checkmark1.svg" alt=" "/></td>
							<td className="ce-menu">
								<img src="images/down-arrow-3.svg" alt=" "/>
								<img src="images/down-arrow-3a.svg" alt=" "/>
								
							</td>
						</tr>
						<tr>
							<td className="ce-menu2">Vitals Clerk</td>
							<td>vitals.clerk</td>
							<td>HIDALGOCC</td>
							<td>Vitals Group</td>
							<td><img src="images/checkmark1.svg" alt=" "/></td>
							<td className="ce-menu">
								<img src="images/down-arrow-3.svg" alt=" "/>
								<img src="images/down-arrow-3a.svg" alt=" "/>
								
							</td>
						</tr>
						<tr>
							<td className="ce-menu2">Wilson</td>
							<td>wilson</td>
							<td>HIDALGOCC</td>
							<td>Vitals Admin</td>
							<td><img src="images/checkmark1.svg" alt=" "/></td>
							<td className="ce-menu">
								<img src="images/down-arrow-3.svg" alt=" "/>
								<img src="images/down-arrow-3a.svg" alt=" "/>
								
							</td>
						</tr>
						<tr>
							<td className="ce-menu2">Yessica Cortez</td>
							<td>yessica.cortez</td>
							<td>HIDALGOCC</td>
							<td>Global Admin</td>
							<td><img src="images/checkmark1.svg" alt=" "/></td>
							<td className="ce-menu">
								<img src="images/down-arrow-3.svg" alt=" "/>
								<img src="images/down-arrow-3a.svg" alt=" "/>
								
							</td>
						</tr>
					</tbody>
				</table>
				
				<div className="ce">
					<ul>
						<li><a id="ce-edit" href="#new-clerk"> Edit</a></li>
						<li>De-Activate</li>
						<li>Duplicate</li>
						<li>Delete</li>
					</ul>
				</div>
				
			</main>
		);
	 }
}

export default Main;

