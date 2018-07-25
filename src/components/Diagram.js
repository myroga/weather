import React, { Component } from 'react';
import {Line} from "react-chartjs-2"

class Diagram extends Component {
  render() {
    return (
    <div>
        <Line
	    data={this.props.temperaturdata}
        />
        <Line
	    data={this.props.vinddata}
	    //data={this.props.vindbydata}
        />
        
    </div>
    );
  }
}

export default Diagram;