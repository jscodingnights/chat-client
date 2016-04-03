import React, { View, Text, TouchableHighlight } from 'react-native';
import TextBox from './TextBox';

export default function UsernameEntry({ onChangeText, onSubmitEditing }) {
  return (
    <View>
      <Text>What is your name?</Text>
      <TextBox onChangeText={onChangeText} onSubmitEditing={onSubmitEditing} />
    </View>
  );
};

UsernameEntry.propTypes = {
  onChangeText: React.PropTypes.func.isRequired,
  onSubmitEditing: React.PropTypes.func.isRequired
};