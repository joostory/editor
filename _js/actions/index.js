import * as types from '../constants/ActionTypes'
import Database from '../database'

export function receiveLocalPost(post) {
	return { type: types.RECEIVE_LOCAL_POST, post }
}

export function receiveLocalPosts(posts) {
	return { type: types.RECEIVE_LOCAL_POSTS, posts }
}

export function removeLocalPost(id) {
	return { type: types.REMOVE_LOCAL_POST, id }
}

export function updateLocalPost(post) {
	return dispatch => {
		Database.getInstance().updatePost(post, (() => dispatch(receiveCurrentPost(post))))
	}
}

export function fetchLocalPosts() {
	return dispatch => {
		Database.getInstance().getPosts(posts => dispatch(receiveLocalPosts(posts)))
	}
}
