import React from 'react'
import { useParams } from 'react-router-dom'

const Ticket = () => {
    let { id } = useParams();

    return (
        <div>{id}</div>
    )
}

export default Ticket