import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';
import './style.scss';

export default class Column extends Component {
  render() {
    const { column: { title, id, end }, tasks } = this.props;
    return (
      <div className="column">
        <div className="column-header">{title}</div>
        <Droppable droppableId={id} type="TASK">
          {(provided, snapshot) => (
            <div
              className="column-tasklist"
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} isOver={end} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    );
  }
}

Column.propTypes = {
  column: PropTypes.object,
  tasks: PropTypes.array,
};
