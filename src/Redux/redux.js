import { createStore } from "redux";
import DEFAULT_TEXT from "../utils/DEFAULT_TEXT";

// Action
const CHANGE_MARKDOWN = "CHANGE_MARKDOWN";

// Action creator
const changeMarkdown = (input) => {
  return {
    type: CHANGE_MARKDOWN,
    input: input
  };
};

// Reducer Function
const markdownReducer = (state = DEFAULT_TEXT, action) => {
  switch (action.type) {
    case CHANGE_MARKDOWN:
      return (state = action.input);
    default:
      return state;
  }
};

// create store
const store = createStore(markdownReducer);

export { CHANGE_MARKDOWN, changeMarkdown, markdownReducer, store };
