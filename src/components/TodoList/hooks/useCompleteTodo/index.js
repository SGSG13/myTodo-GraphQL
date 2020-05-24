import {useState} from 'react';
import {useMutation} from '@apollo/react-hooks';
import {loader} from 'graphql.macro';

const mutationCompleteTodo = loader('./gql/mutationCompleteTodo.graphql');

export const useCompleteTodo = () => {
    const [_completeTodo, {errors}] = useMutation(mutationCompleteTodo, { errorPolicy: 'all' });
    const [error, setError] = useState();
    const  completeTodo = async (id) => {
        try {
            await  _completeTodo({ variables: { id } });
        } catch (e) {
            setError(e.message)
        }
    };
    const completeError = errors || error;

    return {completeTodo, completeError};
};
