import roundel from './roundel.svg';
import style from './css';
import Wrapper from '../Wrapper';
import { Component } from 'preact';
import { Link } from 'preact-router';

export default class Header extends Component {
	render() {
		return (
			<header className={style.header}>
				<Wrapper>
					<Link href="/"><img className={style.logo} src={roundel} /></Link>
				</Wrapper>
			</header>
		);
	}
}
