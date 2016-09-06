import * as types from '../constants/ActionTypes'
import { combineReducers } from 'redux'

const initialState = {
	posts: []
}

function posts(state = initialState.posts, action) {
	switch (action.type) {
		case types.RECEIVE_LOCAL_POSTS:
			return action.posts
		case types.RECEIVE_LOCAL_POST:
			return state.concat([ action.post ])
		case types.REMOVE_LOCAL_POST:
			return state.filter(post => post.id != action.id)
		default:
			return state
	}
}


export default combineReducers({
	posts
})
