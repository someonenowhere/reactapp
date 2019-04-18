import React, { Component } from 'react';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characterFromApi: {},
            isLoading: true
        }
    }

    componentDidMount() {
        fetch('https://swapi.co/api/people/1')
            .then(response => response.json())
            .then(data =>
                this.setState({
                    characterFromApi: data,
                    isLoading: false
                })
            )
    }

    render() {
        return (
            <header>
                <nav>
                    <h1>
                        .TODO App.
                        {this.state.isLoading ?
                            <small className="Pull-right">
                                Loading...
                            </small> :
                            <small className="Pull-right">
                                {this.state.characterFromApi.name} &nbsp; &rsaquo;
                            </small>
                        }
                    </h1>
                </nav>
            </header>
        )
    }
}

export default Navbar;