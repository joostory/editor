import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'
import { fetchLocalPosts } from './actions'

const store = configureStore()

store.dispatch(fetchLocalPosts());

render (
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
