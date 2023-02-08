import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", title: "Learn Toolkit", completed: false },
  { id: "2", title: "Learn Slices", completed: true },
];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // add(state, action) {
    //   state.push({
    //     id: nanoid(),
    //     title: action.payload,
    //     completed: false,
    //   });
    // },
    add: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title) {
        return {
          payload: {
            id: nanoid(),
            title: title,
            completed: false,
          },
        };
      },
    },
    remove(state, action) {
      // nacin 1
      //   const index = state.findIndex((todo) => todo.id === action.payload);
      //   state.splice(index, 1);

      // nacin 2
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export default todosSlice.reducer;
export const { add, remove } = todosSlice.actions;
