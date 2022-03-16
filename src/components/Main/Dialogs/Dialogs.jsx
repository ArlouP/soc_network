
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
	let dialogs = props.dialogs.map(dialog => { return (<Dialog key={dialog.id} id={dialog.id} user={dialog.user} />) });
	let messages = props.messages.map(message => { return (<Message key={message.id} message={message.message} />) });

	const newMessageText = (event) => {
		let textMessage = event.target.value;
		props.updateNewMessageText(textMessage);

	};

	const newMessage = () => {
		props.updateNewMessage();
	};

	return (
		<div>
			<div>
				{dialogs}
			</div>
			<div>
				{messages}
			</div>
			<div>
				<textarea onChange={newMessageText} value={props.currentText} />
				<button onClick={newMessage} >add</button>
			</div>
		</div>
	)
}

export default Dialogs;