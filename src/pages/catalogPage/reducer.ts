import {PricePageState} from 'types/catalog';
import {ActionType, getType} from 'typesafe-actions';
import Rectangle144 from 'resources/images/Rectangle144.png';

import * as actions from './actions';

const item = {
	img: Rectangle144,
	title: 'Тут будет название товара в 2 строки',
	description: "This Coffee Table with U-Shaped Leg Base is HANDMADE in the USA. It's an ideal...",
	price: '230.00',
};

export const initialState: PricePageState = {
	catalogItems: [
		item,
		item,
		item,
		item,
		item,
		item,
		item,
		item,
		item,
	],
	filters: {
		home: {
			coffe: {
				parent: 'home',
				isSelected: false,
				text: 'Coffe Tables',
				childName: 'coffe',
			},
			dining: {
				parent: 'home',
				isSelected: false,
				text: 'Dining Tables',
				childName: 'dining',
			},
			entertainment: {
				parent: 'home',
				isSelected: false,
				text: 'Entertainment Centers',
				childName: 'entertainment',
			},
			entry: {
				parent: 'home',
				isSelected: false,
				text: 'Entry, Sofa, Console Tables',
				childName: 'entry',
			},
			shelving: {
				parent: 'home',
				isSelected: false,
				text: 'Shelving, Organization',
				childName: 'shelving',
			},
		},
		office: {
			conference: {
				parent: 'office',
				isSelected: false,
				text: 'Conference Tables',
				childName: 'conference',
			},
			executive: {
				parent: 'office',
				isSelected: false,
				text: 'Executive, Computer Desks',
				childName: 'executive',
			},
		},
		wood: {
			barstools: {
				parent: 'wood',
				isSelected: false,
				text: 'Barstools, Stools',
				childName: 'barstools',
			},
			benches: {
				parent: 'wood',
				isSelected: false,
				text: 'Benches',
				childName: 'benches',
			},
			chairs: {
				parent: 'wood',
				isSelected: false,
				text: 'Chairs',
				childName: 'chairs',
			},
		},
		DYI: {
			walls: {
				parent: 'DYI',
				isSelected: false,
				text: 'Reclaimed Accent Walls',
				childName: 'walls',
			},
			wood: {
				parent: 'DYI',
				isSelected: false,
				text: 'Reclaimed Wood Flooring',
				childName: 'wood',
			},
			legs: {
				parent: 'DYI',
				isSelected: false,
				text: 'Table Legs',
				childName: 'legs',
			},
		},
		cost: {
			minValue: 0,
			maxValue: 0,
		},
	},
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
	default:
		return state;
	}
};
