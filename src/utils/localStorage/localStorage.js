export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("stateOfExam");
    return (serializedState === null) ?
      undefined : JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("stateOfExam", serializedState);
  } catch (e) { }
};
