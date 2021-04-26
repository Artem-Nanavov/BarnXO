import * as React from 'react';
import {Route, Switch} from 'react-router-dom';

const Routes = () => (
	<Switch>
		<Route exact path="/" render={() => <h1>TITLE</h1>} />
	</Switch>
);

export default Routes;
