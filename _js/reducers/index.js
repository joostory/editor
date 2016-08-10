import * as types from '../constants/ActionTypes'
import { combineReducers } from 'redux'

const initialState = {
	currentPost: {},
	posts: []
}

function currentPost(state = initialState.currentPost, action) {
	switch (action.type) {
		default:
			return state
	}
}

function posts(state = initialState.posts, action) {
	switch (action.type) {
		case types.RECEIVE_LOCAL_POSTS:
			return action.posts
		case types.RECEIVE_LOCAL_POST:
			return state.concat([ action.post ])
		default:
			return state
	}
}


export default combineReducers({
	currentPost, posts
})
