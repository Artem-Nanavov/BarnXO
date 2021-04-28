import * as React from 'react';
import HopePage from 'pages/homePage';
import {Route, Switch} from 'react-router-dom';
import AboutUsPage from 'pages/aboutUs';

const Routes = () => (
	<Switch>
		<Route exact path="/" component={HopePage} />
		<Route exact path="/aboutUs" component={AboutUsPage} />
	</Switch>
);

export default Routes;
