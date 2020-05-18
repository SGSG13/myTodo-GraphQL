import {useQuery} from '@apollo/react-hooks';
import {loader} from 'graphql.macro';

const queryClientTodos = loader('./gql/queryClientTodos.graphql');

export const useTodoCounts = () => {
    const {data} = useQuery(queryClientTodos);
    const doneCount = data.todos.filter((todo) => todo.done).length;
    const toDoCount = data.todos.length - doneCount;

    return {
        doneCount,
        toDoCount
    }
};
