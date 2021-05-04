import * as React from 'react';
import HopePage from 'pages/homePage';
import {Route, Switch} from 'react-router-dom';
import AboutUsPage from 'pages/aboutUs';
import HistoryPage from 'pages/historyPage';
import OurMissionPage from 'pages/ourMissionPage';
import CustomPage from 'pages/customPage';
import CommercialPage from 'pages/commercialPage';
import MaterialsReclaimedWoodPage from 'pages/materialsReclaimedWoodPage';
import MaterialsKiln from 'pages/materialsKiln';
import MaterialsFinishes from 'pages/materialsFinishes';
import ShowRoomPage from 'pages/showRoomPage';

const Routes = () => (
	<Switch>
		<Route exact path="/" component={HopePage} />
		<Route exact path="/aboutUs" component={AboutUsPage} />
		<Route exact path="/history" component={HistoryPage} />
		<Route exact path="/ourMission" component={OurMissionPage} />
		<Route exact path="/custom" component={CustomPage} />
		<Route exact path="/commercial" component={CommercialPage} />
		<Route exact path="/wood" component={MaterialsReclaimedWoodPage} />
		<Route exact path="/kiln" component={MaterialsKiln} />
		<Route exact path="/finishes" component={MaterialsFinishes} />
		<Route exact path="/showroom" component={ShowRoomPage} />
	</Switch>
);

export default Routes;
