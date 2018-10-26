export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore}) => {
    //asynk call to db
    dispatch({
      type: 'CREATE_PROJECT',
      project
    });
  }
};