import React from 'react';
import TodosList from './Todos-list.jsx'

const todos = [
    {
        task: "Jouer",
        isCompleted: false
    },
    {
        task: "Sortir",
        isCompleted: true
    }];

export default class App extends React.Component {
     render() {
        return (
            <div>
                <h1>React ToDos App</h1>
                <TodosList />
            </div>
        );
    }
}