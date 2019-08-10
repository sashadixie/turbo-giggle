import React, { Component } from "react";
import './style.scss';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './Column';

const Container = styled.div`
  display:flex;
`;

class Board extends Component {
  render() {
    const {onDragEnd, columnOrder, columns, tasks} = this.props;
    console.log(this.props);

    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <Container>
          {columnOrder.map(columnId => {
            const column = columns[columnId];
            const allTasks = column.taskIds.map(
              taskId => tasks[taskId]
            )

            return (
              <Column key={column.id} column={column} tasks={allTasks} />
            )
          })}
        </Container>
      </DragDropContext>
    );
  }
}

export default Board;