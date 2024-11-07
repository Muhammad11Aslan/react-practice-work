import React from 'react'
import A from '../store/CreateUser';
import Aslan from './Aslan';
const Ashraf = () => {
    const name = "Aslan";
    return (
        <>
            <A.Provider value={name}>
                <Aslan />
            </A.Provider>
        </>
    )
}

export default Ashraf;
