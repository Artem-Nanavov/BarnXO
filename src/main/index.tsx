import * as React from 'react';
import {render} from 'react-dom';
import {ConnectedRouter, routerMiddleware} from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {batchDispatchMiddleware, enableBatching} from 'redux-batched-actions';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import {StateType} from 'typesafe-actions';
import BreakpointsProvider from 'library/common/providers/BreakpointsProvider';
import Routes from './Routes';
import createRootReducer from './rootReducer';
import rootSaga from './rootSaga';

import 'resources/styles/nullstyle.css';
import './index.scss';

export const history = createHistory();

const sagaMiddleware = createSagaMiddleware();
const rootReducer = createRootReducer(history);

export type RootState = StateType<typeof rootReducer>;

export const store = createStore(
	enableBatching(rootReducer),
	composeWithDevTools(
		applyMiddleware(
			routerMiddleware(history),
			sagaMiddleware,
			batchDispatchMiddleware,
		),
	),
);

export const dispatchSomething = (action: any) => {
	store.dispatch(action);
};

sagaMiddleware.run(rootSaga as any);

render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<BreakpointsProvider>
				<Routes />
			</BreakpointsProvider>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('app'),
);
