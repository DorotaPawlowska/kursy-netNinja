const initState = {
  projects: [
    { id: '1', title: 'help me', content: 'blah '},
    { id: '2', title: 'help me two', content: 'blah blah'},
    { id: '3', title: 'help me tree', content: 'blah blah blah'}
  ]
};

const projectReducer = (state = initState, action) => {
  return state;
}

export default projectReducer;