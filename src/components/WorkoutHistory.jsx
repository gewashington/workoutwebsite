/* eslint react/prefer-stateless-function: 0 */
/* eslint react/jsx-filename-extension: 0 */
/* eslint  no-useless-constructor: 0 */


import React from 'react';

export default class WorkoutHistory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      historyObject: '',
    };
  }
  render() {
    return (
      <div>
          This is the Workout History Component.
      </div>
    );
  }
}
