import React from 'react';
import IssueList from './IssueList'

const Issue = (props) => {

    console.log(props)
    return (
        <li>
            <h3><a href={props.issue.html_url}>{props.issue.title}</a></h3>

        </li>

    )

}

export default Issue;