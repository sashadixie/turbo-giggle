import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './Column';

const Board = ({
  onDragEnd, columnOrder, columns, tasks,
}) => (
  <DragDropContext onDragEnd={onDragEnd}>
    <div className="board">
      {columnOrder.map((columnId) => {
        const column = columns[columnId];
        const allTasks = column.taskIds.map(
          taskId => tasks[taskId],
        );

        return (
          <Column key={column.id} column={column} tasks={allTasks} />
        );
      })}
    </div>
  </DragDropContext>
);

Board.propTypes = {
  onDragEnd: PropTypes.func,
  columnOrder: PropTypes.array,
  columns: PropTypes.array,
  tasks: PropTypes.object,
};

export default Board;
