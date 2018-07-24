import React, { Component } from 'react';
import Dag from"./Dag"


class Daglista extends Component {
  render() {
    return (
    <div>
        <Dag dag="Idag" temperaturdatadagett={this.props.temparraydagett} />
        <Dag dag="I morgon" />
        <Dag dag="I övermorgon" />
    </div>
    );
  }
}

export default Daglista;
