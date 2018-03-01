import { Component } from 'preact';
import css from './css';
import arrow from './arrow-right.svg';

export const STYLE_PRIMARY = 'STYLE_PRIMARY';
export const STYLE_SECONDARY = 'STYLE_SECONDARY';

export const Button = class extends Component {
	render({
		title = 'text',
		style = STYLE_PRIMARY
	}) {
		return (
			<button className={[css.root,css[style]].join(' ')}>
				{title}
				<img src={arrow}/>
			</button>
		);
	}
}

export default Button
