export const ADD_MEMBER = "ADD_MEMBER";
export const addMember = (name) => {
  return { type: ADD_MEMBER, payload: name };
};

export const TOGGLE_MEMBER = "TOGGLE_MEMBER";
export const toggleMember = (idx) => {
  return { type: TOGGLE_MEMBER, payload: idx };
};
