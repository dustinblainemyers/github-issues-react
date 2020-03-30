import React from 'react';
import { Card , Col} from 'react-materialize';

const Issue = (props) => {

    console.log(props)
    return (
        
            // <h3><a href={props.issue.html_url}>{props.issue.title}</a></h3>
            // <h3>{props.issue.body}</h3>
            // <p>{props.issue.body}</p>
            <Col
            m={3}
            s={3}
          >
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
     </Col>   

    )

}

export default Issue;