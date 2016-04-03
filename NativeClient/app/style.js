import cairn, { compose, variables } from 'cairn';
import { StyleSheet } from 'react-native';

const spaces = {
  gutter: 10,
  statusBarHeight: 30
};

const colors = {
  primary: '#DA4745',
  primaryHighlight: 'gray',
  light: 'gray',
  white: 'white'
};

export default cairn({
  page: {
    marginTop: spaces.statusBarHeight,
    margin: spaces.gutter,
    flex: 1,
  },

  centerX: {
    alignItems: 'center',
  },

  centerY: {
    justifyContent: 'center',
  },

  centerXY: {
    justifyContent: 'center',
    alignItems: 'center',
  }
}, 
  compose(
    variables(colors),
    (styles) => StyleSheet.create(styles)
  ), 
  variables(colors)
);