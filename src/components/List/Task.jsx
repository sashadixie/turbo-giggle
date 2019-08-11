import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import classnames from 'classnames';

export default class Task extends Component {
  render() {
    const { task, index, isOver } = this.props;

    return (
      <Draggable
        draggableId={task.id}
        index={index}
      >
        {(provided, snapshot) => (
          <div
            className={classnames('task', {
              dragging: snapshot.isDragging,
              isOver,
            })}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            {task.content}
          </div>
        )}
      </Draggable>
    );
  }
}

Task.propTypes = {
  index: PropTypes.number,
  task: PropTypes.object,
  isOver: PropTypes.bool,
};
