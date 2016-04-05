import React from 'react';

export default React.createClass({
	getInitialState() {
		return {text: ''};
	},
	submit() {
		this.props.newMessage(this.state.text);
		this.setState({text: ''});
	},
	changeInput(event) {
		this.setState({text: event.target.value})
	},
	keyPress(event) {
		if (event.key === 'Enter') {
			this.submit();
		}
	},
	render() {
		return (<div>
			<input type="text" value={this.state.text} onChange={this.changeInput} onKeyPress={this.keyPress}/>
			<button type="subit" value="Send" onClick={this.submit}>Submit</button>
		</div>)
	},
})
