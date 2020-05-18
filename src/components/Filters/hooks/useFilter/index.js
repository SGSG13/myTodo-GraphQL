import {useMutation} from '@apollo/react-hooks';
import {useQueryFilters} from "../../../../hooks/useQueryFilters";
import {loader} from 'graphql.macro';

const mutationSetFilter = loader('./gql/mutationSetFilter.graphql');

export const useFilter = () => {
    const { filters } = useQueryFilters();
    const [_setFilter] = useMutation(mutationSetFilter);
    const setFilter = filter => _setFilter({ variables: { filter } });

    return {
        statusFilter: filters.statusFilter,
        searchTitle: filters.searchTitle,
        setFilter
    };
};
