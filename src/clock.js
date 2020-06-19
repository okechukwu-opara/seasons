import React from 'react';
import ReactDOM from 'react-dom';


class Clock extends React.Component {
        
    // React says we have to define render
        state = {time: new Date().toLocaleTimeString()};

        componentDidMount() {
            setInterval(() => {
                this.setState({time: new Date().toLocaleTimeString()})
            }, 1000)
        }
        
    // React says we have to define render
    render() {
        return (
            <div className="time">
                The time is: {this.state.time}
            </div>
        )
    }
}

ReactDOM.render(<Clock />, document.querySelector('#root'));