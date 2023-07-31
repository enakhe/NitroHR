import { Component, Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';

export default class App extends Component {
	static displayName = App.name;

	render() {
		return (
			<Fragment>
				<BrowserRouter>
					<Routes>
						{AppRoutes.map((route, index) => {
							return <Route path={route.path} key={index} element={route.element} />;
						})}
					</Routes>
				</BrowserRouter>
			</Fragment>
		)
	}
}
