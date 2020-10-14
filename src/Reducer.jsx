// user not loogged in
export const initialState = {
  user: null,
};

// push info into data layout
export const actionTypes = {
  SET_USER: "SET_USER",
};

// change user from null
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return { ...state, user: action.user, }

    default:
      return state;
  }
};

export default reducer;
