import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';
import './style.scss';

export default class Section extends Component {
  render() {
    const { section: { title, id, end }, tasks } = this.props;
    return (
      <div className="section">
        <div className="section-header">{title}</div>
        <Droppable droppableId={id} type="TASK">
          {(provided, snapshot) => (
            <div
              className="section-tasklist"
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

Section.propTypes = {
  section: PropTypes.object,
  tasks: PropTypes.object,
};
