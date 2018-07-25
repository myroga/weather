import React, { Component } from 'react';

class Bilder extends Component {
  render() {
    return (
    <div>
        <img src={"image/" + this.props.wsymb + ".png"} />
    </div>
    );
  }
}

export default Bilder;