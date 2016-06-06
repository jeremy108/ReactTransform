import React from 'react';
import ReactDOM from 'react-dom';

class FormClerk extends React.Component{
  	render(){
	  	return (
			<span>
				<div className="col-e">
					<form id="newClerkForm" method="post" action="#" >
						<a id="new-edit-clerk" href="#new-clerk" onclick="$('#newClerkForm').reset();$('#new-clerk').show();$('#title-form').text('New Clerk');">New Clerk</a><a id="close-form" href="#close"></a>
						<div id="new-clerk">
							<div>
								<a href="#" title="Close" className="close" onclick="closeNewClerkForm();"><img src="images/x-to-close.svg" alt="X"/></a>
								<h2 id="title-form">New Clerk</h2>

								<div className="form-content">
									<section>
										<label for="first-name">First Name</label>
										<input type="text" id="firstName" name="first-name" onfocus="validateNewClerk()" onblur="validateNewClerk()" required/>
										<label for="last-name">Last Name</label>
										<input type="text" id="lastName" name="last-name" onfocus="validateNewClerk()" onblur="validateNewClerk()" required/>

										<label className="container0" for="domain">Domain&nbsp;</label>
										<label className="username-label" for="username">Username&nbsp;</label>

										<select id="domain" name="domain" onfocus="validateNewClerk()" onblur="validateNewClerk()" required>
											<option value="">Select One</option>
											<option value="HIDALGOCC">HIDALGOCC</option>
											<option value="HIDALGOCOUNTY">HIDALGOCOUNTY</option>
											<option value="KOFILE">KOFILE</option>
											<option value="vanguard-dev">vanguard-dev</option>
										</select>	

										<input type="text" id="userName" name="username" onfocus="validateNewClerk()" onblur="validateNewClerk()" required/>
										<label for="email">Email</label>
										<input type="email" id="email" name="email" onfocus="validateNewClerk()" onblur="validateNewClerk()" required/>
									</section>
									<label className="container"></label>
									<p>User Groups</p>
									
									<section className="outer-container-user-groups" onmouseover="validateNewClerk();">
										<section className="user-groups" >
											
											<p>
												<input type="checkbox" id="all" value="All" name="user-groups" onclick="validateNewClerk();" />
												<label for="all"><span>All</span></label>
											</p>
											<p>
												<input type="checkbox" className="checkbox1" className="checkbox1" className="checkbox1" className="checkbox1" className="checkbox1" className="checkbox1" id="global-admin" value="Global Admin" name="users-groups[]" onclick="validateNewClerk();"/>
												<label for="global-admin"><span>Global Admin</span></label>
											</p>
											<p>
												<input type="checkbox" className="checkbox1" className="checkbox1" className="checkbox1" className="checkbox1" className="checkbox1" id="real-property" value="Real Property" name="users-groups[]" onclick="validateNewClerk();" />
												<label for="real-property"><span>Real Property</span></label>
											</p>
											<p>
												<input type="checkbox" className="checkbox1" className="checkbox1" className="checkbox1" className="checkbox1" id="real-property-admin" value="Real Property Admin" name="users-groups[]" onclick="validateNewClerk();" />
												<label for="real-property-admin"><span>Real Property Admin</span></label>
											</p>
											<p>
												<input type="checkbox" className="checkbox1" id="satellite-admin" value="Satellite Admin" name="users-groups[]" onclick="validateNewClerk();" />
												<label for="satellite-admin"><span>Satellite Admin</span></label>
											</p>
											<p>
												<input type="checkbox" className="checkbox1" id="satellite-office" value="satellite-office" name="users-groups[]" onclick="validateNewClerk();"/>
												<label for="Satellite Office" ><span>Satellite Office</span></label>
											</p>
												<p>
												<input type="checkbox" className="checkbox1" className="checkbox1" className="checkbox1" id="vitals" value="Vitals Group" name="users-groups[]" onclick="validateNewClerk();"/>
												<label for="vitals"><span>Vitals</span></label>
											</p>
											<p>
												<input type="checkbox" className="checkbox1" className="checkbox1" id="vitals-admin" value="Vitals Admin" name="users-groups[]" onclick="validateNewClerk();"  />
												<label for="vitals-admin"><span>Vitals Admin</span></label>
											</p>
										</section>
			  						</section>
									
								</div>

								<div className="new-clerk-submit">
									<a href="#new-clerk">Add Multiple...</a>
									<a id="cancel-form" href="#" onclick="closeNewClerkForm();">Cancel</a>
									<input id="register" type="submit" value="Save" className="save-input" onclick="addNewClerk();" />  
								</div>
							</div>		
						</div>
					</form>
				</div>
			  
				<div className="col-f">
					<img src="images/down-arrow-2.svg" alt=" "/>
					<div className="dropdown-1">
						<ul>
							<li>Add Multiple</li>
							<li>Import .CSV</li>
							<li>Export .CSV</li>
						</ul>
					</div>
				</div>
			</span>
	  	);
  	}
}

export default FormClerk;

