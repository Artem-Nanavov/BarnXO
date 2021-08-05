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

export type IFilters = any;

export interface ICatalogItem {
	image: any;
	title: string;
	description: string;
	price: string;
	name?: any;
}

export type PricePageState = {
	filters: IFilters;
	catalogItems: ICatalogItem[];
	searchPhrase: string;
	sort: string;
	page: number;
	order: string;
}
