import React from 'react';

export default class CreateTodo extends React.Component {
    render(){
        return(
           <form onSubmit={this.handleCreate.bind(this)}>
               {/*refs nous permet d'identifier notre élément dans le DOM*/}
               <input type="text"placeholder="What do you need to do?" ref="createInput"/>
               <button>Create</button>
           </form>
        );
    }

    handleCreate(event){
        /*annule l'évènement */
        event.preventDefault();
        //console.log(this.refs.createInput.value);
        //console.log(this.props.createTask);

        this.props.createTask(this.refs.createInput.value);
        this.refs.createInput.value = '';
    }
}