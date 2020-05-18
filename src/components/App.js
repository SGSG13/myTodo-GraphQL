import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from '../apollo/client';

import Header from './Header/Header'
import FilterContainer from './Filters/FilterContainer'
import TodoList from './TodoList/TodoList'
import AddItemForm from './AddTodoForm/AddTodoForm'

import '../sass/main.scss'

function App() {
    return (
        <div className="main-app">
            <ApolloProvider client={client}>
                <Header/>
                <FilterContainer/>
                <TodoList/>
                <AddItemForm/>
            </ApolloProvider>
        </div>
    );
}

export default App;
