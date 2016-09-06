import React, { Component, PropTypes } from 'react'
import Codemirror from 'react-codemirror'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/markdown/markdown'

class Editor extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			post: props.post
		}
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			post: nextProps.post
		})
	}

	handleChange(value) {
		const { onSave } = this.props
		const { post } = this.state

		this.setState({
			post: Object.assign({}, post, {
				content: value
			})
		})
	}

	render() {
		const { post } = this.state;

		if (!post.id) {
			return <div className="editor">post를 선택해 주세요.</div>
		}

		var options = {
			lineNumbers: false,
			mode: 'markdown',
			theme:'atom-material'
    };
		return (
			<div className="editor">
				<Codemirror value={content} onChange={this.handleChange.bind(this)} options={options} />
				<div className="statusbar">
					<p className="message"></p>
					<button className="btn btn_save">저장</button>
				</div>
			</div>
		)
	}
}

Editor.propTypes = {
	post: PropTypes.object,
	onSave: PropTypes.func
}

export default Editor
