import React, { Component } from 'react';
//import Button from 'react-bootstrap/Button';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import MenuItem from './MenuItem.js';
import menu from "../Assets/food_items.js";
class Menu extends Component {
	createMenu() {
		const tabWidth = "19%";
		let menuDOM = [];
		let tabMenus = {};
		let tabContents = []

		for(let tab in menu) {
			let tabPanel = [];
			menuDOM.push(<Tab key={tab} style={{width: tabWidth, padding: 0}}>{tab}</Tab>)
			for (var i = 0; i < menu[tab].length; i++) {
				tabPanel.push(<MenuItem key={i} item={menu[tab][i]} />)
			}
			tabMenus[tab] = tabPanel;
			tabContents.push(<TabPanel key={tab}>{tabMenus[tab]}</TabPanel>)
		};
		return {menuDOM, tabContents};
	}

	render() {
		let menuJSX = this.createMenu();
		return (
			<div style={{marginLeft: "15%", top:"100vh", position:"relative", textAlign:"center"}}>
			  	<Tabs style={{marginTop: "10px"}}>
			  		<TabList>
			  			{menuJSX.menuDOM}
			  		</TabList>
			  		{menuJSX.tabContents}
		  		</Tabs>	
		  	</div>
		)
	}
}
export default Menu;