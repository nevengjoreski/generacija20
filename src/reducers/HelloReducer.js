const initialState = {
  greeting: "Guest",
};

const HelloReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ACTION_ONE":
      return {
        ...state,
        greeting: action.payload,
      };
    default:
      return state;
  }
};

export default HelloReducer;
