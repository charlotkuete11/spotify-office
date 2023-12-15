// reducers/index.js

const initialState = {
  isLoaded: false,
};

const loadedReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        isLoaded: action.payload,
      };
    default:
      return state;
  }
};

export default loadedReducer;
