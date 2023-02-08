import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", title: "Learn Toolkit", completed: false },
  { id: "2", title: "Learn Slices", completed: true },
];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add(state, action) {},
    remove(state, action) {},
  },
});

export default todosSlice.reducer;
export const { add, remove } = todosSlice.actions;
