import {connectRouter} from 'connected-react-router';
import {combineReducers} from 'redux';
import catalogReducer from 'pages/catalogPage/reducer';

const createRootReducer = (history: any) => combineReducers({
	router: connectRouter(history as any),
	catalog: catalogReducer,
});

export default createRootReducer;
