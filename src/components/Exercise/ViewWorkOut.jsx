/* eslint react/prefer-stateless-function: 0 */
/* eslint react/jsx-filename-extension: 0 */
/* eslint  no-useless-constructor: 0 */
/* eslint import/no-named-as-default-member: 0 */
/* eslint import/no-named-as-default: 0 */

import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class ViewWorkout extends React.Component {
  constructor(props) {
    super(props);
  }

  handleBack = (e) => {
    e.preventDefault
    this.props.history.goBack()

  }


  render() {
    console.log(this.props)
    const { workout } = this.props;
    return (
      <div>
        <p>{workout.name}</p>
        <p>{(Object.keys(workout.exercises).map(key =>
        `${key} : ${workout.exercises[key]} `))}
        </p>
        <button>Perform?</button>
        <button onClick={this.handleBack}>Back</button>
      </div>
    );
  }
}

export default withRouter(ViewWorkout);
