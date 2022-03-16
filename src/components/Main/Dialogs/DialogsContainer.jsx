
import { addTextMessageActionCreator, addMessageActionCreator } from '../../../state/dialogReduser';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		dialogs: state.dialog.dialogs,
		messages: state.dialog.messages,
		currentText: state.dialog.currentText,
	};
}
const mapDispatchToProps = (dispatch) => {
	return {
		updateNewMessageText: (textMessage) => {
			dispatch(addTextMessageActionCreator(textMessage));
		},
		updateNewMessage: () => {
			dispatch(addMessageActionCreator());
		}
	}
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;