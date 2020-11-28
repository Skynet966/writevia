import { Switch, Route } from 'react-router-dom';

import Header from './containers/header/header.container';
import HomePage from './pages/home-page/home-page.component';
import ContactPage from './pages/contact-page/contact-page.component';
import TeamPage from './pages/team-page/team-page.component';
import AboutPage from './pages/about-page/about-page.component';

import { AppContainer } from './App.styles';

const App = () => {
	return (
		<AppContainer>
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/contact-us' component={ContactPage} />
				<Route exact path='/our-team' component={TeamPage} />
				<Route exact path='/about-us' component={AboutPage} />
			</Switch>
		</AppContainer>
	);
};

export default App;
