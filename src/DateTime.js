import React, {Component} from 'react';
import './App';

class DateTime extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()}
    }

    componentDidMount(){
        this.tiemerId = setInterval(() => this.tick(),1000)
    }

    componentWillMount() {
        clearInterval(this.tiemerId)
    }

    tick(){
        this.setState({date: new Date()})
    }

    render(){
        return(
            <p><small className="Pull-right">{this.state.date.toDateString()}&#44; {this.state.date.toLocaleTimeString()}</small></p>
        )
    }
}

export default DateTime;