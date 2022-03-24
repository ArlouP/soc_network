import s from './LogIn.module.css';

const LogIn = (props) => {
	if (!props.resultCode) {
		return (
			<p className={s.logInBlock}>You enter!</p>
			// <div className={s.logInBlock}>{props.currentUser.name}</div>
		)
	} else {
		return (
			<div className={s.logInBlock}>
				<input type="text" placeholder="log in" />
				<input type="password" placeholder="password" />
			</div>
		)
	}

}

export default LogIn;