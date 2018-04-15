import React from 'react';
import { NavLink } from 'react-router-dom'



const SideNavList = props => {
	
	let ulStyle = {
		listStyleType: "none",
		padding: 0
	}

	let aStyle = {
		color: props.textColor ? props.textColor : "white",
		fontSize: props.fontSize ? props.fontSize : 14
	}

	return (
		<ul style={ulStyle} >
			{
				props.data.map(item => {
					return (
						<li>
							<NavLink exact to={item.path} style={aStyle} >{item.title}</NavLink>
						</li>
					)
				})
			}
		</ul>
	)
}


const SideNav = props => {
	
	let style = {
		backgroundColor: props.backgroundColor ? props.backgroundColor : "#36476C",
		fontSize: props.fontSize ? props.fontSize : 14,
		width: props.width ? props.width : 270,
		paddingLeft: props.paddingLeft ? props.paddingLeft : 0
	}

	return (
		<div 
			className={!props.additionalClassNames ? "sidenav" : "sidenav "+ props.additionalClassNames}
			style={style} 
		>
			{props.data 
				? <SideNavList 
					data={props.data}
					textColor={props.textColor}
					fontSize={props.fontSize}
				/>
				: <p></p>
			}
		</div>
	)	
}

export default SideNav;