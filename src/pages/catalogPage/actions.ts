import { IFilters } from 'types/catalog';
import { createCustomAction } from 'typesafe-actions';
import * as catalogPageActionTypes from './constants';

export const f = () => { };

export const setFiltersValue = createCustomAction(catalogPageActionTypes.SET_FILTERS,
	(filters: IFilters) => ({ filters }));
