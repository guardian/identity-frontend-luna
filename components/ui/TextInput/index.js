import { Component } from 'preact';
import style from './css';

export default class TextInput extends Component {
	render({
		type = 'text',
		name
	}) {
		return (
			<input className={style.root} type={type} name={name} />
		);
	}
}
