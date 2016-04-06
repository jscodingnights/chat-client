import React, { View, Text, TextInput, TouchableHighlight } from 'react-native';
import styleContext from '../style';

const style = styleContext.extend({
  textInput: {
    height: 40,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: '$light', 
    borderWidth: 1,
    marginBottom: 20
  }
});

export default function TextBox({ value, onChangeText, onSubmitEditing, onFocus }) {
  return (
    <TextInput
      ref={ c => this.textbox = c }

      value={value}
      onChangeText={onChangeText}
      onFocus={onFocus}
      returnKeyType={'send'}
      blurOnSubmit={false}
      autoFocus={true}
      onSubmitEditing={(e) => {
        this.textbox.setNativeProps({ text: '' });
        if (onSubmitEditing) {
          onSubmitEditing(e);
        }
      }}
      {...style('textInput')} />
  );
}

TextBox.propTypes = {
  value: React.PropTypes.string,
  onChangeText: React.PropTypes.func,
  onSubmitEditing: React.PropTypes.func
};