import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const {data,selectedBuilding} = this.props;
		const item = data
			.filter((element) => {
				return element.id === selectedBuilding
			})
			.map(element => {
				return(
				<p>
					{' '}					
					<ul>
						<tr key={selectedBuilding}></tr>
						{element.code ? <p>Code: {element.code}</p> : null}
						{element.name ? <p>Name: {element.name}</p> : null}
						{element.coordinates ? <p>Latitude: {element.coordinates.latitude}</p> : null}
						{element.coordinates ? <p>Longitude: {element.coordinates.longitude}</p> : null}
						{element.address ? <p>Address: {element.address}</p> : null}						
					</ul>
				</p>
			)			
		})				
		return (
			<div>
				<i>Click on a name to view more information</i>
				{item}
			</div>
		
		);		
	}
}
export default ViewBuilding;
