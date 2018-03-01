import './style';
import { Component } from 'preact';

import TextInput from './components/ui/TextInput';
import ControlWrapper from './components/ui/ControlWrapper';
import Header from './components/shell/Header';
import Wrapper from './components/shell/Wrapper';
import Button from './components/ui/Button';


export default class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Wrapper>
					<h1>Sign in to The Guardian</h1>
					<ControlWrapper title="Type in your email">
						<TextInput/>
					</ControlWrapper>
					<ControlWrapper title="What is your password?">
						<TextInput type="password"/>
					</ControlWrapper>
					<ControlWrapper>
						<Button title="Continue" />
					</ControlWrapper>
				</Wrapper>
			</div>
		);
	}
}
