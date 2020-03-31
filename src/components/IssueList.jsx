import React, { Component } from 'react';
import Issue from './IssueDetail'
import { Collection , CollectionItem,Row, Col } from 'react-materialize';

class IssueList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            issues: [],
        };
    }

    componentDidMount() {
        fetch("https://api.github.com/repos/facebook/create-react-app/issues")
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
                            
                            <Issue issue={issue} key={issue.id} />
                           
                        ))
                    ) : (
                            <li>No Data</li>
                        )
                    }
                

            </div>
        )
    }
}



export default IssueList;