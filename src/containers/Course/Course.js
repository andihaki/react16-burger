import React, { Component } from 'react';

class Course extends Component {
    state = {
        title : '',
    }
    componentDidMount(){
        this.parseQueryParams();
    }
    componentDidUpdate(){
        this.parseQueryParams();
    }
    parseQueryParams(){
        const query = new URLSearchParams(this.props.location.search);
        for (let param of query.entries()){
            // supaya ga infinite loop
            if(this.state.title !== param[1]){
                this.setState({ title: param[1]});
            }
        }
    }
    render () {
        return (
            <div onClick={this.props.clicked}>
                <h1>{this.state.title}</h1>
                <p>{this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;