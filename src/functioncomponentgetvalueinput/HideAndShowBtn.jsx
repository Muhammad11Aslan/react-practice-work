import React, { useState } from 'react'

function HideAndShowBtn() {
    const [HideShow, setHideShow] = useState(true)
    return (
        <>
            <h1 style={{ backgroundColor: 'green' }}>Well come to hide page and show with function components</h1>
            {HideShow ? (<h1>well come to hide page</h1>) : null}

            {/* <button type='button' onClick={() => { setHideShow(false) }}>hide</button>
            <button type='button' onClick={() => { setHideShow(true) }}>show</button> */}

            {/* dono sy ak metod use kry same hai dono methd hi  */}

            <button type='button' onClick={() => { setHideShow(!HideShow) }}>Toggel</button>
        </>
    )
}

export default HideAndShowBtn;
