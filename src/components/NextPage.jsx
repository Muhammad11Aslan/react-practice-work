import React from 'react'

// const NextPage = ({input}) => { first method props send
const NextPage = (props) => { //second method props send
    // const { input } = props; third method Props send
    return (
        <div>
            <h1 style={{ backgroundColor: props.backgroundColor, border: props.border }}>NextPage Move Input</h1>
            <h2 >{props.input}</h2>
        </div>
    )
}

export default NextPage
