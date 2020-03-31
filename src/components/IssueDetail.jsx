import React, { Component } from 'react'
import { Collection , CollectionItem,Row, Col, Card } from 'react-materialize';


export class IssueDetail extends Component {
  
  constructor(props) {
       super(props);
       this.state = {
           issues: [],
       };
       this.props = props;
   }

   

  componentDidMount() {
  
  const {issue_number} = this.props.match.params;
  console.log('issue',this.props)
  fetch(`https://api.github.com/repos/facebook/create-react-app/issues/${issue_number}`)
      .then(res => res.json())
      .then((result) => {

          this.setState({
              issues: result
          });

      });

  }

  render() {

    const { issues } = this.state;
     console.log('issues',issues)
    return (
      
         
                      <Row className="issueDetailRow">
                            <Card
                              actions={[
                                  <a  href={issues.html_url}>View On Github </a>,
                                  
                              ]}
                              className="blue-grey darken-1 "
                              
                              textClassName="white-text"

                              title={issues.title}
                              > {issues.body}
                             
                            </Card>
                      </Row>
               
          

      
  )

  }
}

export default IssueDetail
