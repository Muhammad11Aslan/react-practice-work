import React from 'react'

const SendPropsOneFileToAnother = (Props) => {
    // check the props 
    console.log(Props)
    return (
        <div style={{ backgroundColor: 'skyblue' }}>
            <h1>My Name is {Props.name}</h1>
            {/* <h2>My Address:{Props.other.address}</h2>
            <h3>My Age :{Props.other.age}</h3> */}

        </div>
    )
}

export default SendPropsOneFileToAnother;
