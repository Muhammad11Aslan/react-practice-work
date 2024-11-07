import React, { useContext } from 'react'
import A from '../store/CreateUser'

const Aslan = () => {
    const B = useContext(A)
    return (
        <>
            <h1>My Name Is {B}</h1>
        </>
    )
}

export default Aslan
