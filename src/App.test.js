/* eslint react/jsx-filename-extension: 0 */
/* eslint  no-undef: 0 */


import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dashboard />, div);
  ReactDOM.unmountComponentAtNode(div);
});