import React from 'react';
import { Collection , CollectionItem, Card } from 'react-materialize';

const Issue = (props) => {

    console.log(props)
    return (
        
            // <h3><a href={props.issue.html_url}>{props.issue.title}</a></h3>
            // <h3>{props.issue.body}</h3>
            // <p>{props.issue.body}</p>

     <Card
      actions={[
        <a  href={props.issue.html_url}>More Info </a>,
        
      ]}
      className="blue-grey darken-1"
      
      textClassName="white-text"
      title={props.issue.title}
    >
     {props.issue.body}
    </Card>
        

    )

}

export default Issue;