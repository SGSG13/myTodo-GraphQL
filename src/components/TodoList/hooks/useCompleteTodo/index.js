import {useMutation} from '@apollo/react-hooks';
import {loader} from 'graphql.macro';

const mutationCompleteTodo = loader('./gql/mutationCompleteTodo.graphql');

export const useCompleteTodo = () => {
    const [_completeTodo, {errors}] = useMutation(mutationCompleteTodo);
    const completeTodo = id => _completeTodo({ variables: { id } });

    return {completeTodo, errors};
};
