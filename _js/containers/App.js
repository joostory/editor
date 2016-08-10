import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import { connect } from 'react-redux'

import { receiveLocalPost } from '../actions'

import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Editor from '../components/Editor'

class App extends Component {
	constructor(props, context) {
		super(props, context)
	}

	handleSelect() {

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
				<Editor currentPost={currentPost} />
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
