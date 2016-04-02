import React, { View, Text, ScrollView } from 'react-native';
import style from '../style';

function renderEmptyMessage() {
  return (
    <View {...style('log')}>
      <Text>There are currently no messages.</Text>
    </View>
  );
}

function renderMessage({ date, author, text }) {
  return (
    <Text key={date}>{author.username} says {text}</Text>
  );
}

export default function Log({ messages }) {
  if (!messages || !messages.length) {
    return renderEmptyMessage();
  }

  return (
    <ScrollView 
      automaticallyAdjustContentInsets={false}
      scrollEventThrottle={200}
      {...style('log')}>
      <View>
        {messages.map(renderMessage)}
      </View>
    </ScrollView>
  );
}

Log.propTypes = {
  messages: React.PropTypes.arrayOf(React.PropTypes.shape({
    author: React.PropTypes.shape({
      username: React.PropTypes.string
    }),
    text: React.PropTypes.string
  })).isRequired
};

module.exports = Log;