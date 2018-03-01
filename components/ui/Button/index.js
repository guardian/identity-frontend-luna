import { Component } from 'preact';
import css from './css';

export default class Button extends Component {
	render({
		title = 'text',
		style
	}) {
		return (
			<button className={[css.root,style?css[style]:null].join(' ')}>
				{title}
			</button>
		);
	}
}
