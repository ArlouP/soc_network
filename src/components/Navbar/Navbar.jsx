import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
	// const isActive= link => link.isActive ? s.active : s.item;
	// похоже если в стилях index.css класс active , он подтягивается автоматом , без функции
	return (
		<nav className={s.nav}>
			<ul>
				<li><NavLink to="/profile/" className={link => link.isActive ? s.active : s.item}>Profile</NavLink></li>
				<li><NavLink to="/dialogs/" className={link => link.isActive ? s.active : s.item}>Dialogs</NavLink></li>
				<li><NavLink to="/users/" className={link => link.isActive ? s.active : s.item}>Users</NavLink></li>
				<li><NavLink to="/news" className={link => link.isActive ? s.active : s.item}>News</NavLink></li>
				<li><NavLink to="/music" className={link => link.isActive ? s.active : s.item}>Music</NavLink></li>
				<li><NavLink to="/setting" className={link => link.isActive ? s.active : s.item}>Setting</NavLink></li>
			</ul>
		</nav>
	)
}

export default Navbar;