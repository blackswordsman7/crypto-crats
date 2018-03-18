import React, { Component } from 'react';
import {
  Toolbar,
  Paper,
  Button
} from 'react-md';
import { withRouter } from 'react-router';

class Nav extends Component {

  logout() {
    this.props.history.push('/');
    localStorage.removeItem('loggedIn');
  }

  render() {
    return (
      <Paper
        zDepth={1}
      >
      <Toolbar
        colored
        title="Krishi Mitraa"
        actions={
            <Button
              flat
              type='submit'
              key="nav"
              onClick={() => this.logout()}
            >
              Logout
            </Button>
        }
      />
      </Paper>
    );
  }
}

export default withRouter(Nav);
