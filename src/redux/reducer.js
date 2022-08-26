const reducer = (state = {}, action) => {
  action.type === 'LOAD' ? action.payload : state
}

const thunkReducer = () => async(dispatch) => {
    const data = await fetch('')
}

export default reducer