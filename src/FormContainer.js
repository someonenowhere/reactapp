import React, {Component} from 'react';
import Form from './Form';

class FormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            age: null,
            gender: '',
            location: '',
            vegetarian: false,
            kosher: false,
            lactoseFree: false
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const {name, value, type, checked} = e.target;
        type === 'checkbox' ? this.setState({[name] : checked}) : this.setState({[name] : value})
    }

    render() {
        return (
            <div>
                <Form 
                    handleChange={this.handleChange}
                    data={this.state}
                />
            </div>            
        )
    }
}

export default FormContainer;