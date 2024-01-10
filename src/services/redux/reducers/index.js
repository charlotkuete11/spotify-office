// reducers/index.js

const initialState = {
  isLoaded: false,
  navigateRef: null,
};

const loadedReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        isLoaded: action.payload,
      };
      break;
    case 'NAVIGATEREF':
      return {
        ...state,
        navigateRef: action.payload,
      };
      break;
    default:
      return state;
  }
};

export default loadedReducer;
