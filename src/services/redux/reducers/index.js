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
      // eslint-disable-next-line no-unreachable
      break;
    case 'NAVIGATEREF':
      return {
        ...state,
        navigateRef: action.payload,
      };
      // eslint-disable-next-line no-unreachable
      break;
    default:
      return state;
  }
};

export default loadedReducer;
