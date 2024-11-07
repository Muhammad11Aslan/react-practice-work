import React, { useState } from 'react'
const StateCon = () => {
    // const [Data, setData] = useState("Aslan") //name updata
    const [Data, setData] = useState(0)//increment functions
    // let name = "John Doe";
    // variable sy ham data ko update ni kr skty react js ma is liy ham state use krty hai 
    // function UpdateValue() {
    //     name = "Change Name John Doe"
    // }
    function UpdateName() {
        // setData("Aslan Ashraf")
        setData(Data + 1)
    }
    console.log("-----------")
    return (
        <>
            <h1 style={{ backgroundColor: 'green' }}> Well Come to Function components and state manage</h1>
            {/* {name} */}
            {/* <button type='button' onClick={UpdateValue}> click me</button> */}
            <h1>{Data}</h1>
            <button type='button' onClick={UpdateName}> function Component count</button>
        </>
    )
}

export default StateCon;
