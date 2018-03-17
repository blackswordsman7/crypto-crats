import React, { Component } from 'react';
import {
  Toolbar,
  Paper,
  Button
} from 'react-md';
import { withRouter } from 'react-router';

class Nav extends Component {


  render() {
    return (
      <Paper
        zDepth={1}
      >
      <Toolbar
        colored
        title="Krishi Mitraa"
      />
      </Paper>
    );
  }
}

export default withRouter(Nav);
