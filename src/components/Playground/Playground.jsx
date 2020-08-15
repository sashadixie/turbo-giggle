import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/keymap/sublime';
// import 'codemirror/theme/monokai.css';
import './style.scss';

export default class Playground extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenTab: undefined,
      kindsOfSorting: {
        bubble: { id: 1, code: 'const f = 1' },
        insertion: { id: 2, code: 'const b = 3' },
      },
    };
  }

  sortingMessage = chosenTab => `${chosenTab ? `This is a ${chosenTab} kind of sorting` : 'Choose your sorting'}`

  render() {
    const { chosenTab, kindsOfSorting } = this.state;
    const pickSort = e => this.setState({ chosenTab: e.target.name });

    return (
      <div className="playground">
        <div>
          {Object.keys(kindsOfSorting).map((k) => {
            const { id } = k;
            return (
              <button onClick={pickSort} name={k} type="button" key={id}>
                {k}
              </button>
            );
          })}
        </div>
        {this.sortingMessage(chosenTab)}
        {chosenTab ? (
          <CodeMirror
            value={kindsOfSorting[chosenTab].code}
            options={{
              // theme: 'monokai',
              tabSize: 2,
              keyMap: 'sublime',
              mode: 'jsx',
            }}
          />
        ) : null}
      </div>
    );
  }
}

Playground.propTypes = {
  data: PropTypes.object, //eslint-disable-line
};
