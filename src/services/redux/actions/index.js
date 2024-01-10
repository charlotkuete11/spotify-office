export const changeLoadValue = newValue => ({
  type: 'LOADING',
  payload: newValue,
});

export const changeNavigateRef = newValue => ({
  type: 'NAVIGATEREF',
  payload: newValue,
});
