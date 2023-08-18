import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const App = () => {

	return (
		<Fragment>
			<section className='bg-[#f6f8fc]'>
				<BrowserRouter>
					<Routes>
						{AppRoutes.map((route, index) => {
							return <Route path={route.path} key={index} element={route.element} />;
						})}
					</Routes>
				</BrowserRouter>
				<ToastContainer />
			</section>
		</Fragment>
	)
}

export default App;
