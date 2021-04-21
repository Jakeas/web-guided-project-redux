export const TOGGLE_EDITING = "TOGGLE_EDITING";
export const UPDATE_TITLE = "UPDATE_TITLE";

export function toggleEditing() {
    return { type: TOGGLE_EDITING };
}

export const updateTitle = newTitle => {
    return { type: UPDATE_TITLE, payload: newTitle };
};

// the functions above are action creators
// the objects they return (with the keys "type" and "payload") are actions
// what does dispatch method do?