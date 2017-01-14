import _ from 'lodash';
import React from 'react';
import TodosListHeader from './Todos-list-header.jsx';
import TodosListItem from './Todos-list-item.jsx';

export default class TodosList extends React.Component {
    renderItems(){
        const props = _.omit(this.props, 'list');

        return _.map(this.props.list, (element, index)=> < TodosListItem key={index}{...element} {...props}/>);
    }

    render(){

        return(
            <table>
                <TodosListHeader />
                <tbody>{this.renderItems()}</tbody>
            </table>
        )
    }
}