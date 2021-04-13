import { ADD_MEMBER } from "../actions/dragonListActions";

const initialState = {
  isWorking: true,
  members: [
    { name: "Jojo Zhang", dragonStatus: true },
    { name: "Brandon Harris", dragonStatus: false },
  ],
};

export const dragonListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MEMBER:
      // what should we return?
      const newMember = {
        name: action.payload,
        dragonStatus: false,
      };
      return {
        ...state,
        members: [...state.members, newMember],
      };
    default:
      return state;
  }
};
