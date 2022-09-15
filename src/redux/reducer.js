import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addBlogReducer = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    // adding Blog
    addBlogs: (state, action) => {
      state.push(action.payload);
      return state;
    },
    //remove Blog
    removeBlogs: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    //update todos
    updateBlogs: (state, action) => {
      return state.map((blog) => {
        if (blog.id === action.payload.id) {
          return {
            ...blog,
            item: action.payload.item,
          };
        }
        return blog;
      });
    },
    //completed
    completeBlogs: (state, action) => {
      return state.map((blog) => {
        if (blog.id === action.payload) {
          return {
            ...blog,
            completed: true,
          };
        }
        return blog;
      });
    },
  },
});

export const { addBlogs, removeBlogs, updateBlogs, completeBlogs } =
  addBlogReducer.actions;
export const reducer = addBlogReducer.reducer;
