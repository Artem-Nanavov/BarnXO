import {PricePageState} from 'types/catalog';
import {ActionType, getType} from 'typesafe-actions';
import Rectangle144 from 'resources/images/Rectangle144.png';

import * as actions from './actions';

export const initialState: PricePageState = {
	catalogItems: [],
	filters: [],
	searchPhrase: '',
	sort: '',
	page: 1, 
	order: '',
};

export type PricePageActions = ActionType<typeof actions>;

export default (
	state = initialState,
	action: PricePageActions,
): PricePageState => {
	switch (action.type) {
	case getType(actions.setFiltersValue):
		return {
			...state,
			filters: action.filters,
		};
	case getType(actions.setCatalogItemsValue):
		return {
			...state,
			catalogItems: action.items,
		};
	case getType(actions.setSubFilters):
		return {
			...state,
			filters: state.filters.map((f: any) => {
				if (f.category_id === action.id) {
					return {
						...f,
						sub_categories: action.items
					}
				}

				return {
					...f,
				}
			})
		}
	default:
		return state;
	}
};
