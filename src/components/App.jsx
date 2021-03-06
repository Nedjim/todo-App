import React from 'react';
import TodosList from './Todos-list.jsx';
import CreateTodo from './Create-todo.jsx';

const todosList = [
    {
        task: "Jouer",
        isCompleted: true
    },
    {
        task: "Sortir",
        isCompleted: false
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
            <div id="content">
                <h1>React Todo List</h1>
                <CreateTodo list={this.state.list}  createTask ={this.createTask.bind(this)}/>
                <TodosList
                    list={this.state.list}
                    toggleTask={this.toggleTask.bind(this)}
                    saveTask={this.saveTask.bind(this)}
                    deleteTask={this.deleteTask.bind(this)}/>
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
     deleteTask(task){
        _.remove(this.state.list, element => element.task === task);
        this.setState({list: this.state.list});
    }
}