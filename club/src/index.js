import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app/App'
import { BrowserRouter as Router } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import store from './store'
import { Provider } from 'react-redux'
ReactDOM.render(
	<Provider store={store}>
		<Router>
			<HelmetProvider>
				<App />
			</HelmetProvider>
		</Router>
	</Provider>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
