import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-beautiful-dnd';
import Section from './Section';

import './style.scss';

const List = ({
  onDragEnd, columnOrder, columns, tasks,
}) => (
  <DragDropContext onDragEnd={onDragEnd}>
    <div className="list">
      {columnOrder.map((columnId) => {
        const column = columns[columnId];
        const allTasks = column.taskIds.map(
          taskId => tasks[taskId],
        );

        return (
          <Section key={column.id} section={column} tasks={allTasks} />
        );
      })}
    </div>
  </DragDropContext>
);

List.propTypes = {
  onDragEnd: PropTypes.func,
  columnOrder: PropTypes.array,
  columns: PropTypes.array,
  tasks: PropTypes.object,
};

export default List;
