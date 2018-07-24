import React, { Component } from 'react';
import Bilder from "./Bilder"
import Text from "./Text"
import Diagram from "./Diagram";

class Dag extends Component {
  render() {
    return (
    <div>
        <p>
            {this.props.dag}
        </p>
        <Bilder />
        <Text />
        <Diagram 
            temperaturdata={this.props.temperaturdatadag}
            />
    </div>
    );
  }
}

export default Dag;