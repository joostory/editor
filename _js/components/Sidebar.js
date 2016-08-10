import React, { Component, PropTypes } from 'react'

import LocalPostList from './LocalPostList'

class Sidebar extends Component {
	render() {
		const { posts, onSelect, onAdd } = this.props;

		return (
			<section className="sidebar">
				<LocalPostList posts={posts}
				 	onSelect={onSelect}
					onAdd={onAdd} />
			</section>
		)
	}
}

Sidebar.PropTypes = {
	posts: PropTypes.array.isRequired,
	onSelect: PropTypes.func,
	onAdd: PropTypes.func
}

export default Sidebar
