import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../elements/Header/Header';
import Home from '../Home/Home';
import Movie from '../Movie/Movie';
import NotFound from '../NotFound/NotFound';

const App = () => {
	return (
		<BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
			<React.Fragment>
				<Header />
				<Switch>
					<Route path="/" component={Home} exact />
					<Route path="/:movieId" component={Movie} exact />
					<Route component={NotFound} />
				</Switch>
			</React.Fragment>
		</BrowserRouter>
	);
}

export default App;