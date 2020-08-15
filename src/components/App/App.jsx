import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Tasks from '../Tasks';
import Playground from '../Playground';
import Sidebar from '../Sidebar';
import './style.scss';
import '../shared/reset.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visited: false,
    };
  }

  render() {
    const { visited } = this.state;
    console.log(visited);
    const { data } = this.props;

    return (
      <>
        <Sidebar />
        <div className="main">
          <Switch>
            <Route exact path="/" component={() => <Tasks data={data} />} />
            <Route path="/playground" component={Playground} />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;

App.propTypes = {
  data: PropTypes.object, //eslint-disable-line
};
