import roundel from './roundel.svg';
import style from './css';
import Wrapper from '../Wrapper';
import { Component } from 'preact';

export default class Header extends Component {
	render() {
		return (
			<header className={style.header}>
				<Wrapper>
					<img className={style.logo} src={roundel} />
				</Wrapper>
			</header>
		);
	}
}
