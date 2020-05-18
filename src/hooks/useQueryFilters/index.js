import {useQuery} from '@apollo/react-hooks';
import {loader} from 'graphql.macro';

const queryClientFilters = loader('./gql/queryClientFilters.graphql');

export const useQueryFilters = () => {
    const { data } = useQuery(queryClientFilters);
    const filters = data ? data.filters : null;

    return { filters };
};
