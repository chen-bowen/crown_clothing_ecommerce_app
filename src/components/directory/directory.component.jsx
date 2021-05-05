import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import DIRECTORY_DATA from "./directory.data";
import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: DIRECTORY_DATA,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherStateProps }) => (
          <MenuItem key={id} {...otherStateProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
