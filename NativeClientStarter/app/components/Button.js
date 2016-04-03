import React, { Text, TouchableHighlight } from 'react-native';
import styleContext from '../style';

const style = styleContext.extend({
  button: {
    // `props` is a special word in cairn, and the values given
    // are spread onto your component.  Props exists so all
    // color/presentation-related attributes can be centralized into the
    // style system instead of there being exceptions to that.
    props: {
      underlayColor: '$primaryHighlight'
    },
    
    backgroundColor: '$primary',
    height: 50
  },

  buttonLabel: {
    fontWeight: 'bold'
  }
});

/**
 * PRO-TIP: Components are dumb.  They have no state of their own and 
 * can most often just simply be Stateless Functional Components (defined
 * via a simple function) where the argument given to the function is
 * `props` (which here is spread via ES6 into onPress and children).
 */
export default function Button({ onPress, children }) {
  return (
    <TouchableHighlight
      onPress={onPress}
      {...style('button centerXY')}>
      <Text {...style('buttonLabel')}>{ children }</Text>
    </TouchableHighlight>
  );
}

/**
 * PRO-TIP: All dumb components should define the strictest-possible
 * propTypes.  It'll come in handy when things are broken and you're not
 * entirely sure where the issue is.
 */
Button.propTypes = {
  children: React.PropTypes.node.isRequired,
  onPress: React.PropTypes.func.isRequired
};