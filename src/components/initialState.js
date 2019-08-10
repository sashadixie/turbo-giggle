const initialState = {
    tasks: {
      'task-1': { id: 'task-1', content: 'Share with contacts button on iOS' },
      'task-2': { id: 'task-2', content: 'Import styleguide' },
      'task-3': { id: 'task-3', content: 'Check CI' },
      'task-4': { id: 'task-4', content: 'SEO issues' },
      'task-5': { id: 'task-5', content: 'Payment links in footer' }
    },
    columns: {
      'column-1': {
        id: 'column-1',
        title: 'Backlog',
        taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5']
      },
      'column-2': {
        id: 'column-2',
        title: 'In progress',
        taskIds: []
      },
      'column-3': {
        id: 'column-3',
        title: 'Done',
        taskIds: []
      }
    },
    columnOrder: ['column-1', 'column-2', 'column-3'],
    mode: 'board',
  }
  
  export default initialState;