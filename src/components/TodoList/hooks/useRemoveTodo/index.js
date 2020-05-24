import {useState} from 'react';
import {useMutation} from '@apollo/react-hooks';
import {loader} from 'graphql.macro';

const mutationRemoveTodo = loader('./gql/mutationRemoveTodo.graphql');

export const useRemoveTodo = () => {
    const [_removeTodo, {errors}] = useMutation(mutationRemoveTodo);
    const [error, setError] = useState();
    const  removeTodo = async (id) => {
        try {
            await  _removeTodo({ variables: { id } });
        } catch (e) {
            setError(e.message)
        }
    };
    const removeError = errors || error;

    return {removeTodo, removeError};
};
