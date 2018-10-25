export const createProject = (project) => {
  return (dispatch, getState) => {
    //asynk call to db
    dispatch({
      type: 'CREATE_PROJECT',
      project
    });
  }
};