
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Main/Profile/ProfileContainer';
import DialogsContainer from './components/Main/Dialogs/DialogsContainer';
import UsersContainer from './components/Main/Users/UsersConatiner';

// TEST

function App(props) {

	return (
		// <BrowserRouter>
			<div className='app-wraper'>
				<Header />
				<Navbar />
				<div className='main-wraper'>
					{/* НАдо ли сделать вложенные роуты в для пути /?? */}
					<Routes>
						<Route path='/profile/*' element={<ProfileContainer />} />
						<Route path='/dialogs/*' element={<DialogsContainer />} />
						<Route path='/users' element={<UsersContainer />} />
					</Routes>
				</div>
			</div>
		// </BrowserRouter>
	);
}

export default App;
