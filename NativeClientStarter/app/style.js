/**
 * Cairn lib docs:
 * 
 * https://github.com/adamterlson/cairn
 */

import cairn, { compose, variables } from 'cairn';
import { StyleSheet } from 'react-native';

// You can reference these colors via `variables`: 
// e.g. { color: '$NAME' }
const colors = {
  primary: 'red',
  secondary: 'blue'
};

// This definition is for **GLOBAL** styles.  Component-specific styles should be
// defined within the component file itself using `extend`.
export default cairn({
  page: {
    flex: 1,

    // Child types get all of the above and whatever they specify
    // They are referenced like {...style('parent.child')}
    noNav: {
      paddingTop: 30
    }
  },

  header: {
    color: '$primary'
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
  },
}, 
  compose(
    variables(colors),
    (styles) => StyleSheet.create(styles)
  ), 
  variables(colors)
);