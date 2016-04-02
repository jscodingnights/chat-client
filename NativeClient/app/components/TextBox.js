import React, { View, Text, TextInput, TouchableHighlight } from 'react-native';
import style from '../style';

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