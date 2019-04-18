import React, { Component } from 'react';
import './App';
import DateTime from './DateTime';
import ToDo from './ToDo';
import toData from './toData';
import MemeGenerator from './MemeGenerator';

class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: toData,
            isLoading: true,
            characterApi: {}
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 150)        
    }

    handleChange(id) {
        this.setState(prevState => {
            const updateTodo = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return { todos: updateTodo }
        })
    }

    render() {
        var timeofday;
        const date = new Date();
        const hours = date.getHours();
        const styles = {}

        if (hours < 12) {
            timeofday = 'Morning'
            styles.color = "#009fff"
        } else if (hours >= 12 && hours < 17) {
            timeofday = 'Afternoon'
            styles.color = "#ffa500"
        } else {
            timeofday = 'Evening'
            styles.color = "#ff6b6b"
        }

        const todolist = this.state.todos.map(item =>
            <ToDo
                key={item.id}
                item={item}
                handleChange={this.handleChange}
                isLoading={this.state.isLoading}
            />
        )

        return (
            <div>
                {
                    this.state.isLoading === true ?
                        <section className="App-header"><h1>Loading....</h1></section> :                        
                        <section className="Main-content">                            
                            <h1 className="Text-center"><span style={styles}>Good {timeofday}</span> Welcome to TODO!!!</h1>
                            <DateTime />
                            <div className="Col-md-12">
                                <div className="Col-md-4">{todolist}</div>
                                <div className="Col-md-8">
                                    <MemeGenerator />
                                </div>                                                        
                            </div>                            
                        </section>
                }
            </div>
        )
    }

}

export default MainContent