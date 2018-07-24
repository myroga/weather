import React, { Component } from 'react';
import {Line} from "react-chartjs-2"

class Diagram extends Component {
  render() {
    return (
    <div>
        <Line
	data={this.props.temperaturdata}
/>
        <p>
            Diagram två, vind
        <p>
        </p>
            Diagram tre, moln
        <p>
        </p>
            Diagram fyra, regn
        </p>
    </div>
    );
  }
}

export default Diagram;