import { Component } from 'preact';
import style from './css';

export default class ControlWrapper extends Component {
	render({
		title,
		children
	}) {
		return (
			<div className={style.root}>
				<h3>{title}</h3>
				{children}
			</div>
		);
	}
}
