import React from 'react'

class StatemangeClassCom extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Aslan",
            data: 0
        }
    }
    render() {
        return (
            <>
                <h1 style={{ backgroundColor: 'green' }}> Well Come to class components and state manage</h1>

                <h1>My Name Is {this.state.name}</h1>

                <button type='button' onClick={() => this.setState({ name: "Aslan Ashraf" })}>Class Components name update </button>

                <h1>count :{this.state.data}</h1>

                <button type='button' onClick={() => this.setState({ data: this.state.data + 1 })}>Class Components count</button>

            </>

        )
    }

}

export default StatemangeClassCom
