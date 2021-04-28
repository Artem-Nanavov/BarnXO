import * as React from 'react';
import HopePage from 'pages/homePage';
import {Route, Switch} from 'react-router-dom';
import AboutUsPage from 'pages/aboutUs';
import HistoryPage from 'pages/historyPage';

const Routes = () => (
	<Switch>
		<Route exact path="/" component={HopePage} />
		<Route exact path="/aboutUs" component={AboutUsPage} />
		<Route exact path="/history" component={HistoryPage} />
	</Switch>
);

export default Routes;
