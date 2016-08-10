import React, { Component, PropTypes } from 'react'
import dateformat from 'dateformat'
import Database from '../database'

class LocalPostList extends Component {
	constructor(props, context) {
		super(props, context)
	}

	handleAdd() {
		const { posts, onAdd } = this.props
		var id = posts.length > 0? posts[posts.length - 1].id + 1 : 1
		Database.getInstance().newPost(id, post => onAdd(post))
	}

	render() {
		const { posts } = this.props

		let list = posts.map((item, i) => {
			return (
				<li key={item.id}>
					<a className="item">
						<span className="item_title">{item.title}</span>
						<span className="item_date">{dateformat(item.date, 'yyyy/mm/dd HH:MM')}</span>
						<span className="item_content">{item.content}</span>
					</a>
				</li>
			)
		})

		return (
			<ul className="list">
				{list}
				<li><a className="btn_add" onClick={this.handleAdd.bind(this)}>add</a></li>
			</ul>
		)
	}
}

LocalPostList.propTypes = {
	posts: PropTypes.array.isRequired,
	onSelect: PropTypes.func,
	onAdd: PropTypes.func
}

export default LocalPostList
