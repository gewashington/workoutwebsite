/* eslint react/prefer-stateless-function: 0 */
/* eslint react/jsx-filename-extension: 0 */
/* eslint  no-useless-constructor: 0 */


import React from 'react';

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>This is the welcome screen!</div>
    );
  }
}
