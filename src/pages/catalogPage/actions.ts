import { IFilters } from 'types/catalog';
import { createCustomAction } from 'typesafe-actions';
import * as catalogPageActionTypes from './constants';

export const setFiltersValue = createCustomAction(catalogPageActionTypes.SET_FILTERS,
	(filters: IFilters) => ({ filters }));

export const setCatalogItemsValue = createCustomAction(catalogPageActionTypes.SET_CATALOG_ITEMS,
	(items: any) => ({ items }));

export const setSubFilters = createCustomAction(catalogPageActionTypes.SET_SUB_FILTERS_ITEM,
	(items: any, id: number) => ({ items, id }));
