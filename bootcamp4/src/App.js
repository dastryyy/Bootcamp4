import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      filterText: '',
      codeText: '',
      nameText: '',
      latText: '',
      longText: '',
      addressText: '',
      selectedBuilding: 0
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
    })
  }

  codeUpdate(value) {
    this.setState({
      codeText: value
    })
  }

  nameUpdate(value) {
    this.setState({
      nameText: value
    })
  }

  latUpdate(value) {
    this.setState({
      latText: value
    })
  }

  longUpdate(value) {
    this.setState({
      longText: value
    })
  }

  addressUpdate(value) {
    this.setState({
      addressText: value
    })
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({
      selectedBuilding: id
    })
  }

  deleteHandler(item) {
		let data = this.state.data
		this.setState({
		  data:data.filter(i => i.id !== item)
		})
  }

  addHandler(c,n,lat,long,a) {
    let data = this.state.data
    var lastid = data.slice(-1)[0].id
    var currID = lastid+1
    if(c !== '' && n !== '') {
      data.push({
        id: currID,
        code: c,
        name: n,
        coordinates: {
          latitude: lat,
          longitude: long
        },
        address: a
      })
      alert('Building added!')
    }
    else {
      alert('Building must include code and name')
    }
    console.log(data)
    this.setState({
      data:data
    })
}

  render() {

    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>
        <Search
          filterText = {this.state.filterText}
          filterUpdate = {this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>                    
                  </tr>
                  <BuildingList
                    data={this.state.data}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}    
                    deleteHandler={this.deleteHandler.bind(this)}                
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding 
              selectedBuilding={this.state.selectedBuilding}
              data={this.state.data}
              />
              <p></p>
              <AddBuilding 
              data={this.state.data}
              addHandler={this.addHandler.bind(this)}
              codeText={this.state.codeText}
              codeUpdate={this.codeUpdate.bind(this)}
              nameText={this.state.nameText}
              nameUpdate={this.nameUpdate.bind(this)}
              latText={this.state.latText}
              latUpdate={this.latUpdate.bind(this)}
              longText={this.state.longText}
              longUpdate={this.longUpdate.bind(this)}
              addressText={this.state.addressText}
              addressUpdate={this.addressUpdate.bind(this)}
              />              
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
