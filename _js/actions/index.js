import * as types from '../constants/ActionTypes'
import Database from '../database'

export function receiveLocalPost(post) {
	return { type: types.RECEIVE_LOCAL_POST, post }
}

export function receiveLocalPosts(posts) {
	return { type: types.RECEIVE_LOCAL_POSTS, posts }
}

export function fetchLocalPosts() {
	return dispatch => {
		Database.getInstance().getPosts(posts => dispatch(receiveLocalPosts(posts)))
	}
}
