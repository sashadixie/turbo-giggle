import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Board from '../Board/Board';
import List from '../List/List';
import './style.scss';

const MENU_ITEMS = [
  {
    name: 'board',
    icon: 'view_column',
    title: 'Board',
  },
  {
    name: 'list',
    icon: 'clear_all',
    title: 'List',
  },
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = props.data;
  }

  changeMode = ({ currentTarget: { name: mode } }) => {
    this.setState({
      mode,
    });
  }

  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    const { columns } = this.state;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId
      && destination.index === source.index
    ) {
      return;
    }

    const start = columns[source.droppableId];
    const finish = columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...this.state,
        columns: {
          ...columns,
          [newColumn.id]: newColumn,
        },
      };

      this.setState(newState);
      return;
    }

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    this.setState(newState);
  }

  render() {
    const {
      mode, columnOrder, columns, tasks,
    } = this.state;
    const changeMode = e => this.changeMode(e);

    return (
      <div>
        <Header mode={mode} />
        <div className="app-container">
          <Sidebar />
          <div className="content">
            <div className="switcher">
              {MENU_ITEMS.map(({ name, icon, title }) => (
                <button
                  type="button"
                  key={name}
                  name={name}
                  onClick={changeMode}
                  className={mode === name ? 'active' : ''}
                >
                  <i className="material-icons">{icon}</i>
                  <span>{title}</span>
                </button>
              ))}
            </div>
            <div className="view">
              {mode === 'board'
                ? (
                  <Board
                    columnOrder={columnOrder}
                    columns={columns}
                    tasks={tasks}
                    onDragEnd={this.onDragEnd}
                  />
                ) : (
                  <List
                    columnOrder={columnOrder}
                    columns={columns}
                    tasks={tasks}
                    onDragEnd={this.onDragEnd}
                  />
                )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

App.propTypes = {
  data: PropTypes.object, //eslint-disable-line
};
