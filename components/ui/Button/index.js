import { Component } from 'preact';
import style from './css';

export default class Button extends Component {
	render({
		title = 'text',
	}) {
		return (
			<button className={style.root}>
				{title}
			</button>
		);
	}
}
