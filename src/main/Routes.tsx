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
import LoginPage from 'pages/loginPage';
import LogoutPage from 'pages/logoutPage';
import ChangePasswordPage from 'pages/changePasswordPage';
import PersonalDetails from 'pages/personalDetails';
import AccountPage from 'pages/accountPage';
import RegPage from 'pages/regPage';
import ReviewsPage from 'pages/reviewsPage';
import ArticlesPage from 'pages/articles';
import ProductPage from 'pages/productPage/containers/productPageContainer';
import CatalogPageContainer from 'pages/catalogPage/containers/catalogPageContainer';

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
		<Route exact path="/login" component={LoginPage} />
		<Route exact path="/logout" component={LogoutPage} />
		<Route exact path="/changePassword" component={ChangePasswordPage} />
		<Route exact path="/personalDetails" component={PersonalDetails} />
		<Route exact path="/account" component={AccountPage} />
		<Route exact path="/reg" component={RegPage} />
		<Route exact path="/reviews" component={ReviewsPage} />
		<Route exact path="/articles" component={ArticlesPage} />
		<Route exact path="/product" component={ProductPage} />
		<Route exact path="/catalog" component={CatalogPageContainer} />
	</Switch>
);

export default Routes;
