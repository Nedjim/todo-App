import React from 'react';
import TodosListHeader from './Todos-list-header.jsx';

export default class TodosList extends React.Component {
    render(){
        return(
            <table>
                <TodosListHeader />
            </table>
        );
    }
}