import React from 'react';

class Content extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'your name'
        }
    }

    async onChange(e) {
        await this.setState({ name: e.target.value });
        console.log('name', this.state.name)
    }
    getValueFromChild = () => {
        this.props.getValueFromChild(this.state.name)
    }
    render() {
        return (
            <div>
                <input type='text' onChange={this.onChange.bind(this)} />
                <button onClick={this.getValueFromChild}>CLICK</button>
            </div>
        );
    }
}
export default Content;