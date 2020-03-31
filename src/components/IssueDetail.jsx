import React, { Component } from 'react'
import { Collection , CollectionItem,Row, Col, Card } from 'react-materialize';


export class IssueDetail extends Component {
  
  constructor(props) {
       super(props);
       this.state = {
           issues: [],
       };
   }

   

  componentDidMount() {

  const {number} = this.props;

  fetch(`https://api.github.com/repos/facebook/create-react-app/issues/${number}`)
      .then(res => res.json())
      .then((result) => {

          this.setState({
              issues: result
          });

      });

  }

  render() {

    const { issues } = this.state;

    return (
      <div>
         


              {issues.length > 0 ? (
                  issues.map(issue => (
                      
                      <Row>
                            <Card
                              actions={[
                                  <a  href={issue.html_url}>View Issue Detail </a>,
                                  
                              ]}
                              className="blue-grey darken-1"
                              
                              textClassName="white-text"
                              title={issue.title}
                              >
                             
                            </Card>
                      </Row>
                  ))
              ) : (
                      <li>No Data</li>
                  )
              }
          

      </div>
  )

  }
}

export default IssueDetail
