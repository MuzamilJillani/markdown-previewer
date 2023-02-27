import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import MarkdownPreviewer from "./App";
//Redux imports
import { changeMarkdown, store } from "./Redux/redux.js";
import { Provider, connect } from "react-redux";

// mapStateToProps, mapDispatchToProps
const mapState = (state) => {
  return {
    input: state
  };
};
const mapDispatch = (dispatch) => {
  return {
    changeInput: (input) => {
      dispatch(changeMarkdown(input));
    }
  };
};
// defining container which connects mapState and mapDispatch to MarkdownPreviewer
const Container = connect(mapState, mapDispatch)(MarkdownPreviewer);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <Container />
    </Provider>
  </StrictMode>
);
