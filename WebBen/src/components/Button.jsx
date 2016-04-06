import React from 'react';

/**
 * PRO-TIP: Components are dumb.  They have no state of their own and 
 * can most often just simply be Stateless Functional Components (defined
 * via a simple function) where the argument given to the function is
 * `props` (which here is spread via ES6 into onClick and children).
 */
export default function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>
      { children }
    </button>
  );
}

/**
 * PRO-TIP: All dumb components should define the strictest-possible
 * propTypes.  It'll come in handy when things are broken and you're not
 * entirely sure where the issue is.
 */
Button.propTypes = {
  children: React.PropTypes.node.isRequired,
  onClick: React.PropTypes.func.isRequired
};