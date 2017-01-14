import React from 'react';

export default class CreateTodo extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            error: null
        }
    }

    renderError(){
        if(!this.state.error){ return null;}

        return (
            <div style={{color: '#B71C1C'}}>
                {this.state.error}
            </div>
        );
    }

    render(){
        return(
           <form onSubmit={this.handleCreate.bind(this)}>
               {/*refs nous permet d'identifier notre élément dans le DOM*/}
               <input type="text"placeholder="What do you need to do?" ref="createInput"/>
               <button>Create</button>
               {this.renderError()}
           </form>
        );
    }

    handleCreate(event){
        /*annule l'évènement */
        event.preventDefault();
        //console.log(this.refs.createInput.value);
        //console.log(this.props.createTask);

        const createInput = this.refs.createInput;
        const task = createInput.value;
        const validateInput = this.validateInput(task);

        if(validateInput){
            this.setState({error: validateInput});
            return;
        }
        this.setState({error: null});
        this.props.createTask(task);
        this.refs.createInput.value = '';
    }

    validateInput(task){
        if(!task){
            return 'Please, enter a task';
        }
        else if(_.find(this.props.list, element => element.task === task)){
            return 'Task already exist';
        }
        else {
            return null;
        }
    }
}