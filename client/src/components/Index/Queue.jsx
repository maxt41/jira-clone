import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Tickets from './Tickets'

const Queue = () => {
    let { id } = useParams()
    const [pushedIssues, setPushedIssues] = useState([])

    useEffect(() => {
        let issues = [{ 'id': '1', 'summary': 'summary', 'reporter': 'reporter', 'initials': 'IS', 'assignee': 'IT Support', 'status': 'status', 'type': 'problem' },
        { 'id': '2', 'summary': 'summary 2', 'reporter': 'reporter 2', 'initials': 'I2', 'assignee': 'IT Support 2', 'status': 'status 2', 'type': 'request' },
        { 'id': '3', 'summary': 'summary 3', 'reporter': 'reporter 3', 'initials': 'I3', 'assignee': 'IT Support 3', 'status': 'status 3', 'type': 'request' }]
        if (parseInt(id) === 1) {
            setPushedIssues(issues.filter(x => x.type === 'request'))
        }
        if (parseInt(id) === 2) {
            setPushedIssues(issues.filter(x => x.type === 'problem'))
        }
        if (parseInt(id) === 3) {
            setPushedIssues(issues)
        }
    }, [id])

    return (
        <Tickets issues={pushedIssues} />
    )
}

export default Queue