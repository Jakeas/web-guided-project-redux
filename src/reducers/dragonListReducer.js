import { ADD_MEMBER, TOGGLE_MEMBER } from "../actions/dragonListActions";

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

    case TOGGLE_MEMBER:
      const memberToToggle = state.members.find();
      memberToToggle.dragonStatus = !memberToToggle.dragonStatus;
      return {
        ...state,
        members: state.members.map((member, index) => {
          if (index === action.payload) {
            return {
              ...member,
              dragonStatus: !member.dragonStatus,
            };
          } else {
            return member;
          }
        }),
      };
    default:
      return state;
  }
};
