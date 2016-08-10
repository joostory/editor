import React, { Component, PropTypes } from 'react'
import Codemirror from 'react-codemirror'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/markdown/markdown'

class Editor extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = Object.assign({
			content: ''
		}, props.post)
	}

	handleChange(value) {
		this.setState({
			content: value
		})
	}

	render() {
		const { content } = this.state;

		var options = {
			lineNumbers: false,
			mode: 'markdown',
			theme:'atom-material'
    };
		return (
			<div className="editor">
				<Codemirror value={content} onChange={this.handleChange.bind(this)} options={options} />
			</div>
		)
	}
}

Editor.propTypes = {
	post: PropTypes.object
}

export default Editor
