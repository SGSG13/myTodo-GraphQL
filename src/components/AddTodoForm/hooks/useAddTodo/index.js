import {useMutation} from '@apollo/react-hooks';
import {loader} from 'graphql.macro';

const mutationAddTodo = loader('./gql/mutationAddTodo.graphql');

export const useAddTodo = () => {
    const [_addTodo, { errors }] = useMutation(mutationAddTodo);
    const addTodo = (todo) => _addTodo({ variables: { todo }});

    return {addTodo, errors};
};
