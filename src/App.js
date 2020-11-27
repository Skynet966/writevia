import { Switch, Route } from 'react-router-dom';

import Header from './containers/header/header.container';
import HomePage from './pages/home-page/home-page.component';

import { AppContainer } from './App.styles';

const App = () => {
	return (
		<AppContainer>
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
			</Switch>
		</AppContainer>
	);
};

export default App;
