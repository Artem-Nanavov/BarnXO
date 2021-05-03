import * as React from 'react';
import HopePage from 'pages/homePage';
import {Route, Switch} from 'react-router-dom';
import AboutUsPage from 'pages/aboutUs';
import HistoryPage from 'pages/historyPage';
import OurMissionPage from 'pages/ourMissionPage';
import CustomPage from 'pages/customPage';
import CommercialPage from 'pages/commercialPage';

const Routes = () => (
	<Switch>
		<Route exact path="/" component={HopePage} />
		<Route exact path="/aboutUs" component={AboutUsPage} />
		<Route exact path="/history" component={HistoryPage} />
		<Route exact path="/ourMission" component={OurMissionPage} />
		<Route exact path="/custom" component={CustomPage} />
		<Route exact path="/commercial" component={CommercialPage} />
	</Switch>
);

export default Routes;
