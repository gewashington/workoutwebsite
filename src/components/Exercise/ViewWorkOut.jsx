/* eslint react/prefer-stateless-function: 0 */
/* eslint react/jsx-filename-extension: 0 */
/* eslint  no-useless-constructor: 0 */
/* eslint import/no-named-as-default-member: 0 */
/* eslint import/no-named-as-default: 0 */

import React from 'react';

export default class ViewWorkout extends React.Component {
  constructor(props) {
    super(props);
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
      </div>
    );
  }
}
