import React from 'react';
import ReactDOM from 'react-dom';


class UserForm extends React.Component {
        
    // React says we have to define render
    render() {
        return (
            <form>
                <label>Enter a Username: </label>
                <input />
            </form>
        )
    }
}

ReactDOM.render(<UserForm />, document.querySelector('#root'));