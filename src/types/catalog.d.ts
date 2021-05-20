export interface IChildItem {
	parent: IParent;
	isSelected: boolean;
	text: string;
	childName: IChild;
}

export type IParent = 'home' | 'office' | 'wood' | 'DYI';
export type IChild = 'coffe'
	| 'dining'
	| 'entertainment'
	| 'entry'
	| 'shelving'
	| 'conference'
	| 'executive'
	| 'barstools'
	| 'benches'
	| 'chairs'
	| 'walls'
	| 'wood'
	| 'legs';

export interface IFilters {
	home: {
		coffe: IChildItem;
		dining: IChildItem;
		entertainment: IChildItem;
		entry: IChildItem;
		shelving: IChildItem;
	};
	office: {
		conference: IChildItem;
		executive: IChildItem;
	};
	wood: {
		barstools: IChildItem;
		benches: IChildItem;
		chairs: IChildItem;
	};
	DYI: {
		walls: IChildItem;
		wood: IChildItem;
		legs: IChildItem;
	};
	cost: {
		minValue: number;
		maxValue: number;
	};
}

export interface ICatalogItem {
	img: any;
	title: string;
	description: string;
	price: string;
}

export type PricePageState = {
	filters: IFilters;
	catalogItems: ICatalogItem[];
}
