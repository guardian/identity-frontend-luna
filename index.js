import './style';
import { Component } from 'preact';

import TextInput from './components/ui/TextInput';
import InputWrapper from './components/ui/InputWrapper';
import Header from './components/shell/Header';
import Wrapper from './components/shell/Wrapper';


export default class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Wrapper>
					<InputWrapper title="Type in your email">
						<TextInput/>
					</InputWrapper>
					<InputWrapper title="What is your password?">
						<TextInput type="password"/>
					</InputWrapper>
				</Wrapper>
			</div>
		);
	}
}
