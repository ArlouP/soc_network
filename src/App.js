
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Main/Profile/ProfileContainer';
import DialogsContainer from './components/Main/Dialogs/DialogsContainer';
import UsersContainer from './components/Main/Users/UsersConatiner';


// TEST

function App(props) {

	return (
		// <BrowserRouter>
			<div className='app-wraper'>
				<HeaderContainer />
				<Navbar />
				<div className='main-wraper'>
					{/* НАдо ли сделать вложенные роуты в для пути /?? */}
					<Routes>
					// как прокинуть пропсыв логин и надо ли?
						{/* <Route path='/login' element={<LogIn/>} />			 */}
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
