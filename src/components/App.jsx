import React from 'react';
import TodosList from './Todos-list.jsx'

const todosList = [
    {
        task: "Jouer",
        isCompleted: false
    },
    {
        task: "Sortir",
        isCompleted: true
    }];

export default class App extends React.Component {

    //Etat du Component
    constructor(props){
        super(props);

        this.state = {
            list: todosList   //array déclaré plus haut
        }
    }

     render() {
        return (
            <div>
                <h1>React ToDos App</h1>
                <TodosList list={this.state.list}/>
            </div>
        );
    }
}