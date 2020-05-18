import {useEffect} from 'react';
import {loader} from 'graphql.macro';
import {useQuery} from '@apollo/react-hooks';
import {useQueryFilters} from "../../../../hooks/useQueryFilters"
import {filterTodos} from "../../../../utils";

const queryTodos = loader('./gql/queryTodos.graphql');
const subscriptionTodos = loader('./gql/subscriptionTodos.graphql');

export const useQueryTodos = () => {
    const {loading, error, data, subscribeToMore} = useQuery(queryTodos, { fetchPolicy: "network-only" });
    const { filters } = useQueryFilters();
    const todos = data ? filterTodos(data.todos, filters) : [];
    useEffect(() => {
        const unsubscribe = subscribeToMore({
            document: subscriptionTodos,
            updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data) return prev;
                return {
                    todos: subscriptionData.data.todos
                }
            }
        });
        return () => unsubscribe();
    }, [subscribeToMore]);

    return {loading, error, todos};
};
