import React from 'react';
import InputMessage from '../components/InputMessage.jsx';
import { sendMessage } from '../socket';

export default function InputMessageConnected() {
  return (
    <InputMessage newMessage={sendMessage}/>
  )
}

