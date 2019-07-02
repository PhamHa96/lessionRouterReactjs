import React, { Component } from 'react';
import Content from './Content'
class MainBody extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'your name'
        }
    }
    getValueFromChild =(value)=> {
        this.setState({name: value});
    }
    render() {
        var { name } = this.state;
        return (
            <div>

                <h2>THIS IS MAIN BODY</h2>
                <strong>This is about {name}</strong>

                <Content getValueFromChild={ this.getValueFromChild }/>
            </div>

        );
    }
}
export default MainBody;