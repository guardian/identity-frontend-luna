import style from './css';
import { Component } from 'preact';

export default class Wrapper extends Component {
	render({children}) {
		return (
			<div className={style.wrapper}>
				{children}
			</div>
		);
	}
}
