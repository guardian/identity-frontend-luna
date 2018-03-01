import { Component } from 'preact';

import TextInput from '../ui/TextInput';
import ControlWrapper from '../ui/ControlWrapper';
import Button from '../ui/Button';
import { route } from 'preact-router';


export default class App extends Component {

	handleSubmit(ev) {
		ev.preventDefault();
		const email = ev.target.querySelector('*[name=email]').value;
		route(`/email?email=${email}`, false);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit.bind(this)} >
				<h1>Sign in to The Guardian</h1>
				<ControlWrapper>
					<Button title="Sign in with Facebook" href="#" style="secondary" />
					<Button title="Sign in with Google" href="#" style="secondary" />
				</ControlWrapper>
				<ControlWrapper title="Type in your email">
					<TextInput name="email"/>
				</ControlWrapper>
				<ControlWrapper>
					<Button title="Continue" type="submit" />
				</ControlWrapper>
			</form>
		);
	}
}
