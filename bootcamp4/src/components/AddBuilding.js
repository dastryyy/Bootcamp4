import React from 'react'

class AddBuilding extends React.Component{

    codeUpdate() {
        const codeVal = this.myValue.value
        this.props.codeUpdate(codeVal)
    }
    nameUpdate() {
        const nameVal = this.myValue2.value
        this.props.nameUpdate(nameVal)
    }
    latUpdate() {
        const latVal = this.myValue3.value
        this.props.latUpdate(latVal)
    }
    longUpdate() {
        const longVal = this.myValue4.value
        this.props.longUpdate(longVal)
    }
    addressUpdate() {
        const addressVal = this.myValue5.value
        this.props.addressUpdate(addressVal)
    }


    render() {
        const {addHandler} = this.props
        const {codeText,nameText,latText,longText,addressText} = this.props
        
        return(            
            <div className="add">
                <form>
                    {' '}
                    <i>Add a building here:</i>
                    <input
                        type="text"
                        ref={(value) => {this.myValue = value}}
                        placeholder="Code"
                        onChange={this.codeUpdate.bind(this)}                        
                    /> 
                    <input
                        type="text"  
                        ref={(value) => {this.myValue2 = value}}                   
                        placeholder="Name"
                        onChange={this.nameUpdate.bind(this)}
                    /> 
                    <input
                        type="text"  
                        ref={(value) => {this.myValue3 = value}}                   
                        placeholder="Latitude"
                        onChange={this.latUpdate.bind(this)}
                    /> 
                    <input
                        type="text"  
                        ref={(value) => {this.myValue4 = value}}                   
                        placeholder="Longitude"
                        onChange={this.longUpdate.bind(this)}
                    /> 
                    <input
                        type="text"  
                        ref={(value) => {this.myValue5 = value}}                   
                        placeholder="Address"
                        onChange={this.addressUpdate.bind(this)}
                    />                     
                    <button type = "button" onClick={() => addHandler(codeText,nameText,latText,longText,addressText)}>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddBuilding;