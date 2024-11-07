import React, { useState } from 'react'

const ConionalOperater = () => {
    // const [Conditional, setConditional] = useState(true);
    // three condition use if else wali 
    // 1,2,3
    const [Conditional, setConditional] = useState(3);
    return (
        <div>
            <h1 style={{ backgroundColor: 'green' }}> ConionalOperater use in function components if else </h1>
            {Conditional == 1 ? <h1>Well come component1</h1> : Conditional == 2 ? <h1>Well come Components 2 </h1> : <h1>Well come Components 3 </h1>}
        </div>
    )
}

export default ConionalOperater
