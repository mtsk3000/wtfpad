import React from 'react';
import { NavLink } from 'react-router-dom'

import mainNavTop from './Images/mainNavTop.png'
import mainNavBottom from './Images/mainNavBottom.png'


const OldSideNav = props => {
	
	let style = {
		backgroundColor: props.backgroundColor ? props.backgroundColor : "#36476C",
		fontSize: props.fontSize ? props.fontSize : 14,
		width: props.width ? props.width : 270,
		padding: 0,
		position: "fixed"
	}

	return (
		<div 
			className={!props.additionalClassNames ? "sidenav" : "sidenav "+ props.additionalClassNames}
			style={style} 
		>
			<img src={mainNavTop} alt="" style={{width: 270, top: 0}} />
			<img src={mainNavBottom} alt="" style={{width: 270, position: "relative", bottom: 0}} />
		</div>
	)	
}

export default OldSideNav;