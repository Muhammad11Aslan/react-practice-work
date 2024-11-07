import React, { Component } from 'react'
import PropsRecive from './PropsRecive';

class PropsSend extends Component {
    constructor() {
        super();
        this.state = {
            name: "Aslan"
        }
    }
    render() {
        // let name = "Aslan";
        return (
            <div>
                <h1 style={{ backgroundColor: 'green' }}>Well come to props in class components </h1>
                {/* <PropsRecive name={name} /> */}
                <PropsRecive name={this.state.name} />
                <button type='button' onClick={() => { this.setState({ name: "Ashraf Shafi" }) }}>click me</button>
            </div>
        )
    }
}
export default PropsSend;