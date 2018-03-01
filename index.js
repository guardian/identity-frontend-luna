import './style';
import { Component } from 'preact';
import Router from 'preact-router';

import TextInput from './components/ui/TextInput';
import ControlWrapper from './components/ui/ControlWrapper';
import Header from './components/shell/Header';
import Wrapper from './components/shell/Wrapper';
import Button from './components/ui/Button';

import Email from './components/routes/Email';


export default class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Wrapper>
					<Router>
						<Email path="/" />
						<div path="/email">
							<h1>Sign in to The Guardian</h1>
							<ControlWrapper title="What is your password?">
								<TextInput type="password" name="password"/>
							</ControlWrapper>
							<ControlWrapper>
								<Button title="Sign in" type="submit" />
							</ControlWrapper>
						</div>
						<div default>
							<h1>{`Oh No! It's A 404`}</h1>
						</div>
					</Router>
				</Wrapper>
			</div>
		);
	}
}
