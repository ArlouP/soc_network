import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './state/store-redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// window.store = store;
// let rerenderReactDom = () => {

ReactDOM.render(
	<BrowserRouter>
		{/* // <React.StrictMode> */}
		<Provider store={store}>
			<App />
		</Provider >
		{/* // </React.StrictMode> */}
	</BrowserRouter>
	,
	document.getElementById('root')
);
// }
// надо передавать stste в rerender
// rerenderReactDom();
// store.subscribe(() => {
// 	rerenderReactDom(store.getState())
// });



reportWebVitals();
