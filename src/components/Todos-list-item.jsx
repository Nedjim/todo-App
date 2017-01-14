import React from 'react';

export default class TodosListItem extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            isEditing: false
        }
    }

    renderActionSection(){
        if(this.state.isEditing){
            return (
                <td>
                    <button onClick={this.onSaveClick.bind(this)}>Save</button>
                    <button onClick={this.OnCancelClick.bind(this)}>Cancel</button>
                </td>
            );
        }
        return(
            <td>
                <button onClick={this.OnEditClick.bind(this)}>Edit</button>
                <button>Delete</button>
            </td>
        )
    }

    renderTaskSection(){
        const {task, isCompleted} = this.props;
        const taskStyle = {
            color: isCompleted ? 'green':'red',
            cursor: 'pointer'
        }

        if(this.state.isEditing){
            return(
                <td>
                    <form onSubmit={this.onSaveClick.bind(this)}>
                        <input type="text" defaultValue={task} ref='editInput'/>
                    </form>
                </td>
            );
        }
        return (
            <td style={taskStyle} onClick={this.props.toggleTask.bind(this, task)}>
                {task}
            </td>
        );
    }

    render(){
        return(
            <tr>
                {this.renderTaskSection()}
                {this.renderActionSection()}
            </tr>
        );
    }

    OnEditClick(){
        this.setState({isEditing: true});
    }

    OnCancelClick(){
        this.setState({isEditing: false});
    }

    onSaveClick(event){
        event.preventDefault();

        const oldTask = this.props.task;
        const newTask = this.refs.editInput.value;

        this.props.saveTask(oldTask,newTask);
         this.setState({isEditing: false});
    }
}