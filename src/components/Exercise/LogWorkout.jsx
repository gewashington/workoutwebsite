/* eslint react/prefer-stateless-function: 0 */
/* eslint react/jsx-filename-extension: 0 */
/* eslint  no-useless-constructor: 0 */
/* eslint import/no-named-as-default-member: 0 */
/* eslint import/no-named-as-default: 0 */
/* eslint linebreak-style: 0 */

import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class LogWorkout extends React.Component {
  constructor(props) {
    super(props);
  };

  handleBackToLogWorkout = (e) => {
    e.preventDefault
    this.props.history.goBack()
  }

  render() {
    const { workout } = this.props;
    return (
      <div>
        {workout.name}
        <p>{(Object.keys(workout.exercises).map(key =>
        `Exercise: ${key}, Reps: ${workout.exercises[key]} `))}
        </p>
        <Link to={`/workout/logworkout/workoutsummary/${workout.id}`}>
          <button>Finished</button>
        </Link>
        <button onClick={this.handleBackToLogWorkout}>Back</button>
      </div>
    );
  }
}

export default withRouter(LogWorkout);
