import React from 'react';

class BuildingList extends React.Component { 

	render() {
		const {data, filterText, selectedUpdate, deleteHandler} = this.props;
		const buildingList = data
			.filter(directory => {
				return directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >=0
			})
			.map(directory => {
			return (
				<tr key={directory.id}
					onClick={() => selectedUpdate(directory.id)}>				  
					<td>{directory.code} </td>
					<td> {directory.name} </td>
					<button onClick={() =>deleteHandler(directory.id)}>Delete</button>	
				</tr>
			);
		});
		return <div>{buildingList}</div>;
	}
}
export default BuildingList;
