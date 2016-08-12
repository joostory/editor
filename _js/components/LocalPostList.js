import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import dateformat from 'dateformat'
import Database from '../database'

class LocalPostList extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			selectedId: 0
		}
	}

	handleSelect(id) {
		const { onSelect } = this.props
		onSelect(id)
		this.setState({ selectedId: id })
	}

	handleAdd() {
		const { posts, onAdd } = this.props
		var id = posts.length > 0? posts[posts.length - 1].id + 1 : 1
		Database.getInstance().newPost(id, post => onAdd(post))
		this.setState({ selectedId: id })
	}

	render() {
		const { posts } = this.props
		const { selectedId } = this.state

		let list = posts.map((item, i) => {
			let className = classnames({
				"item": true,
				"selected": item.id == selectedId
			})
			return (
				<li key={item.id}>
					<a className={className} onClick={e => this.handleSelect(item.id)}>
						<span className="item_title">{item.title}</span>
						<span className="item_date">{dateformat(item.date, 'yyyy/mm/dd HH:MM')}</span>
						<span className="item_content">{item.content.substring(0,30)}</span>
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
