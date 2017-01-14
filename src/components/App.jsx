import React from 'react';
import TodosList from './Todos-list.jsx';
import CreateTodo from './Create-todo.jsx';

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
                <CreateTodo createTask ={this.createTask.bind(this)}/>
                <TodosList
                    list={this.state.list}
                    toggleTask={this.toggleTask.bind(this)}
                    saveTask={this.saveTask.bind(this)}/>
            </div>
        );
    }

    createTask(newTask) {
        this.state.list.push({
            task: newTask,
            isCompleted: false
        });
        this.setState({list: this.state.list});
    }

    toggleTask(task){
        const foundTodo = _.find(this.state.list, element => element.task === task);

        foundTodo.isCompleted = !foundTodo.isCompleted;

        this.setState({list: this.state.list});
    }

    saveTask(oldTask, newTask){
        const foundTodo = _.find(this.state.list, element => element.task === oldTask);

        foundTodo.task = newTask;
        this.setState({list: this.state.list});
    }
}