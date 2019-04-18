import React from 'react';

function ToDo(props) {
    const completedStyles = {
        fontStyle: 'italic',
        textDecoration: 'line-through',
        color: 'grey'
    }
    return (
        <div className='TodoContainer'>
            <div className='Todolist'>
                <input type='checkbox' checked={props.item.completed} onChange={() => props.handleChange(props.item.id)} />
                <span style={props.item.completed ? completedStyles : null}>{props.item.task}</span>
            </div>
        </div>
    )
}

export default ToDo;