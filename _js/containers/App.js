import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import { connect } from 'react-redux'

import { receiveCurrentPost, receiveLocalPost } from '../actions'

import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Editor from '../components/Editor'

class App extends Component {
	constructor(props, context) {
		super(props, context)
	}

	handleSelect(id) {
		const { dispatch, posts } = this.props
		let filterdPosts = posts.filter((item, index) => item.id == id)
		if (filterdPosts.length > 0) {
			dispatch(receiveCurrentPost(filterdPosts[0]))
		}
	}

	handleAdd(post) {
		const { dispatch } = this.props
		dispatch(receiveLocalPost(post))
	}

	render() {
		const { currentPost, posts } = this.props

		return(
			<div>
				<Header />
				<Sidebar posts={posts}
					onSelect={this.handleSelect.bind(this)}
					onAdd={this.handleAdd.bind(this)} />
				<Editor post={currentPost} />
			</div>
		)
	}
}

App.propTypes = {
	currentPost: PropTypes.object.isRequired,
	posts: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    currentPost: state.currentPost,
		posts: state.posts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  }
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)
