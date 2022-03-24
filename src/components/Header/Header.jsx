import { NavLink } from "react-router-dom";
import s from "./Header.module.css"

const Header = (props) => {
	return (
		<header className={s.header}>
			<img className={s.logo} src='https://cdn.dribbble.com/users/10882/screenshots/15172621/media/cd2246d5d0f54f9a4316bd4d276764b2.png?compress=1&resize=400x300' />
			<div className={s.logInBlock}>
			
				{props.isEnter ? <p>{props.logIn}</p> : <NavLink to="/login">Log in</NavLink>}
			</div>

		</header>
	)
}

export default Header;