import React, { View } from 'react-native';
import { connect } from 'react-redux';

import UsernameEntry from '../components/UsernameEntry';
import Button from '../components/Button';
import { updateUser, createCurrentUser } from '../modules/user';

function CreateUser({ onChangeText, onSubmit }) {
  return (
    <View>
      <UsernameEntry onChangeText={onChangeText} />
      <Button onPress={onSubmit}>Let's Go!</Button>
    </View>
  );
}

export default connect(
  ({ user: { name } }) => ({ name }),
  (dispatch) => ({
    onChangeText: (username) => dispatch(updateUser({ username })),
    onSubmit: () => dispatch(createCurrentUser())
  })
)(CreateUser)