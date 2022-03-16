import { NavLink } from 'react-router-dom';
import s from './Message.module.css';

const Message = (props) => {
	return (
			<div id={props.id}>
				<p>{props.message}</p>
			</div>
	)
}

export default Message;