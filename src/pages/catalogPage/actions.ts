import {IFilters} from 'types/catalog';
import {createAction, createCustomAction} from 'typesafe-actions';
import * as catalogPageActionTypes from './constants';

// export const requestUserTheme =	createAction(pricePageActionTypes.REQUEST_USER_THEME)<any>();

// export const requestWebCatalog = createCustomAction(pricePageActionTypes.REQUEST_WEB_CATALOG_SAGA,
// 	(forceRequest: boolean) => ({forceRequest}));

export const f = () => {};

export const setFiltersValue = createCustomAction(catalogPageActionTypes.SET_FILTERS,
	(filters: IFilters) => ({filters}));
