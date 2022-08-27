const reducer = (state = {}, action) => (action.type === 'LOAD' ? action.payload : state);

const thunkReducer = () => async (dispatch) => {
  const response = await fetch('http://127.0.0.1:3000/api/v1/random');
  const data = await response.json();
  dispatch({ type: 'LOAD', payload: data });
};

export default reducer;
export { thunkReducer };
