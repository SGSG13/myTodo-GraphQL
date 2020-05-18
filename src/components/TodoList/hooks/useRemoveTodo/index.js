import {useMutation} from '@apollo/react-hooks';
import {loader} from 'graphql.macro';

const mutationRemoveTodo = loader('./gql/mutationRemoveTodo.graphql');

export const useRemoveTodo = () => {
    const [_removeTodo, {errors}] = useMutation(mutationRemoveTodo);
    const removeTodo = id => _removeTodo({ variables: { id } });

    return {removeTodo, errors};
};
