import React, { Component } from 'react';
import Bilder from "./Bilder"
import Text from "./Text"
import Diagram from "./Diagram";

class Dag extends Component {
  render() {
    return (
    <div>
        <Bilder />
        <Text />
        <Diagram />
    </div>
    );
  }
}

export default Dag;