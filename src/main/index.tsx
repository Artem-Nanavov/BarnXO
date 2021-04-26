import {ConnectedRouter, routerMiddleware} from 'connected-react-router';
import * as React from 'react';
import {render} from 'react-dom';
import Routes from './Routes';
import 'styles/nullstyle.css';

render(
	<ConnectedRouter history={history}>
		<Routes />
	</ConnectedRouter>,
	document.getElementById('app'),
);
