import { Component } from 'preact';

import TextInput from '../ui/TextInput';
import ControlWrapper from '../ui/ControlWrapper';
import { Button, STYLE_SECONDARY as buttonSecondary} from '../ui/Button';
import { route } from 'preact-router';


export default class App extends Component {

	handleSubmit(ev) {
		ev.preventDefault();
		const email = ev.target.querySelector('*[name=email]').value;
		route(`/email?email=${email}`, false);
	}

	render({email}) {
		return (
			<form onSubmit={this.handleSubmit.bind(this)} >
				<h1>Welcome, {email}</h1>
				<ControlWrapper title="What is your password?">
					<TextInput type="password" name="password"/>
				</ControlWrapper>
				<ControlWrapper>
					<Button title="Sign in" type="submit" />
				</ControlWrapper>
			</form>
		);
	}
}
