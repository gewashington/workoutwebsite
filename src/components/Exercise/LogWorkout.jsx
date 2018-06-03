/* eslint react/prefer-stateless-function: 0 */
/* eslint react/jsx-filename-extension: 0 */
/* eslint  no-useless-constructor: 0 */
/* eslint import/no-named-as-default-member: 0 */
/* eslint import/no-named-as-default: 0 */
/* eslint linebreak-style: 0 */

import React from 'react';

class LogWorkout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { workout } = this.props;
    return (
      <div>
        {workout.name}
      </div>
    );
  }
}

export default LogWorkout;
