import React, { Component } from 'react';
import {Line} from "react-chartjs-2"

class Diagram extends Component {
  render() {
    return (
    <div >
        <div className="diagram"> 
            <Line data={this.props.temperaturdata} />
        </div>
        <div className="diagram">
            <Line data={this.props.vinddata} />
        </div>
        <div className="diagram"> 
            <Line data={this.props.nederborddata} />
        </div>
        <div className="diagram">
            <Line data={this.props.molndata} />
        </div>
    </div>
    );
  }
}

export default Diagram;