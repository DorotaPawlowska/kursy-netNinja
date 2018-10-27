const initState = {
  projects: [
    { id: '1', title: 'help me', content: 'blah '},
    { id: '2', title: 'help me two', content: 'blah blah'},
    { id: '3', title: 'help me tree', content: 'blah blah blah'}
  ]
};

const projectReducer = (state = initState, action) => {
  switch(action.type){
    case'CREATE_PROJECT':
      console.log('create project', action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log('create project error', action.err);
      return state;
      // break;
    default:
      return state;
  }
}

export default projectReducer;