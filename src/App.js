import React from "react";
import "./styles.css";
import { marked } from "marked";

const extendedTables = require("marked-extended-tables");

class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      load: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    //console.log(marked);
    this.props.changeInput(event.target.value);
  };
  componentDidMount() {
    this.setState({
      load: true
    });
  }
  render() {
    marked.use(extendedTables);
    this.state.load
      ? (document.getElementById("preview").innerHTML = marked(
          this.props.input
        ))
      : console.log("not loaded");
    //console.log(this.state.input)
    return (
      <div className="container">
        <div>
          <div className="head-bar">Editor</div>
          <textarea
            value={this.props.input}
            id="editor"
            onChange={this.handleChange}
          ></textarea>
        </div>
        <div>
          <div className="head-bar">Preview</div>
          <div id="preview" className="text-end"></div>
        </div>
      </div>
    );
  }
}

export default MarkdownPreviewer;
