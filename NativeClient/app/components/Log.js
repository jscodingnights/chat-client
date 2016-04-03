import React, { View, Text, ScrollView } from 'react-native';
import styleContext from '../style';

const style = styleContext.extend({
  log: {
    flex: 1,    
    borderBottomWidth: 1,
    borderColor: '$light',
    paddingBottom: 10,
    marginBottom: 10
  }
});

function renderEmptyMessage() {
  return (
    <View {...style('log')}>
      <Text>There are currently no messages.</Text>
    </View>
  );
}

function renderMessage({ date, author, text }) {
  const by = (author && author.username) || 'You'

  return (
    <Text>{by} - {text}</Text>
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