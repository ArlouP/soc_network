import { NavLink } from 'react-router-dom';
import s from './Dialog.module.css';

const Dialog = (props) => {
	const path = '/dialogs/' + props.id;
	return (
		<div key={props.id} >
			<NavLink to={path}>{props.user}</NavLink>
		</div>
	)
}

export default Dialog;