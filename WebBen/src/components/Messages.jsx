import React from 'react';

export default function Messages({messages}) {
	return (
		<div className="messages">
			{messages.map(message => <span>{message.date} {message.author.username}: {message.text}<br/></span>)}
		</div>
	)
}
