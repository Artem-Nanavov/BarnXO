import * as React from 'react';
import HopePage from 'pages/homePage';
import {Route, Switch} from 'react-router-dom';

const Routes = () => (
	<Switch>
		<Route exact path="/" component={HopePage} />
	</Switch>
);

export default Routes;
