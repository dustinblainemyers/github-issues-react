import React, { Component } from 'react';

class IssueList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            issues: [],
            isLoaded: false
        };
    }

    componentDidMount() {
        fetch("https://api.github.com/repos/facebook/create-react-app/issues")
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    isLoaded: true,
                    issues: result.issues
                });
                console.log(this.state);
            });

    }
    render() {
        const { isLoaded, issues } = this.state;
        if (!!isLoaded) {
            return <div>Loading...</div>
        }
        else {
            return (
                <div>
                    <ul>
                        {
                            issues.map(issue => (
                                <li key={issue.name}>
                                    {issue.title}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            )
        }
    }
}

export default IssueList;