import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import MenuItem from './MenuItem.js'

class Menu extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const tabWidth = "19%"
		const item = {id: 1, name: "Avocado Toast", description:"Multigrain bread lightly toasted with fresh avocado and a side of lemon", price:24.99}
		const item2 = {id: 2, name: "Cheese Toast", description:"Multigrain bread lightly toasted with fresh cheese and a side of lemon", price:24.98}

		return (
			<div style={{marginLeft: "15%", top:"100vh", position:"relative", textAlign:"center"}}>
			  <Tabs style={{marginTop: "10px"}}>
			    <TabList>
			      <Tab style={{width: tabWidth, padding: 0}}>Breakfast</Tab>
			      <Tab style={{width: tabWidth, padding: 0}}>Lunch</Tab>
			      <Tab style={{width: tabWidth, padding: 0}}>Dinner</Tab>
			      <Tab style={{width: tabWidth, padding: 0}}>Drinks</Tab>
			      <Tab style={{width: tabWidth, padding: 0}}>Desert</Tab>
			    </TabList>

			    <TabPanel>
			    	<h3>Breakfast</h3>
			        <MenuItem item={item} />
			        <MenuItem item={item} />
			        <MenuItem item={item} />
			        <MenuItem item={item2} />
			        <MenuItem item={item2} />
			        <MenuItem item={item2} />

			    </TabPanel>
			    <TabPanel>
			      <h3>Lunch</h3>
			      <MenuItem item={item2} />
			      <MenuItem item={item2} />
			      <MenuItem item={item2} />

			    </TabPanel>
			    <TabPanel>
			      <h3>Dinner</h3>
			      <MenuItem item={item2} />
			      <MenuItem item={item2} />
			      <MenuItem item={item2} />

			    </TabPanel>
			    <TabPanel>
			      <h3>Drinks</h3>
			      <MenuItem item={item2} />
			      <MenuItem item={item2} />
			      <MenuItem item={item2} />

			    </TabPanel>
			    <TabPanel>
			      <h3>Desert</h3>
			      <MenuItem item={item2} />
			      <MenuItem item={item2} />
			      <MenuItem item={item2} />

			    </TabPanel>
			  </Tabs>
			</div>
		)	
	}
}
export default Menu;