import * as React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {render} from 'react-dom';
import Routes from './Routes';
import 'resources/styles/nullstyle.css';

render(
	<BrowserRouter>
		<Routes />
	</BrowserRouter>,
	document.getElementById('app'),
);
