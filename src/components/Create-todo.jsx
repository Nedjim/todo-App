import React from 'react';

export default class CreateTodo extends React.Component {
    render(){
        return(
           <form>
               <input type="text"placeholder="What do you need to do?" />
               <button>Create</button>
           </form>
        );
    }
}