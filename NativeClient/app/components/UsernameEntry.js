import React, { View, Text, TouchableHighlight } from 'react-native';
import TextBox from './TextBox';
import styleContext from '../style';

const style = styleContext.extend({});

export default function UsernameEntry({ onChangeText, onSubmit }) {
  return (
    <View>
      <Text>What is your name?</Text>
      <TextBox onChangeText={onChangeText} />
    </View>
  );
};

UsernameEntry.propTypes = {
  onChangeText: React.PropTypes.func.isRequired
};