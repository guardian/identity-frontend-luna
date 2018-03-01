import { Component } from 'preact';

export default class TextInput extends Component {
	render({
		title,
		children
	}) {
		return (
			<div>
				<h3>{title}</h3>
				{children}
			</div>
		);
	}
}
