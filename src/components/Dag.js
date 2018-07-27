import React, { Component } from 'react';
import Bilder from "./Bilder"
import Text from "./Text"
import Diagram from "./Diagram";

class Dag extends Component {
  render() {
    return (
    <div>
        <Bilder wsymb={this.props.wsymb}/>
        <p>
            {this.props.dag}
        </p>
        <Text />
        
        <Diagram 
            temperaturdata={this.props.temperaturdatadag}
            vinddata={this.props.vinddatadag}
            nederborddata={this.props.nederborddatadag}
            molndata={this.props.molndatadag}
        />
    </div>
    );
  }
}

export default Dag;