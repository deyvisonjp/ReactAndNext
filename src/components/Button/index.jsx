import { Component } from "react";

import "./styles.css";

export class Button extends Component {
  render() {
    const { textButton, click, disabled } = this.props;

    return (
      <button className="button-page" onClick={click} disabled={disabled}>
        {textButton}
      </button>
    );
  }
}
