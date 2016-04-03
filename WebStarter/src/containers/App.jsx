import React from 'react';

/**
 * PRO-TIP: Containers know about application state.  They include within
 * them other containers and components.  They should have no (or very
 * limited) style definitions, but I have some here for documentation
 * purposes.
 */
export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Hello world!
            </div>
        );
    }
}
