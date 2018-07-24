import React, { Component } from 'react';
import Dag from"./Dag"


class Daglista extends Component {
  render() {
    return (
    <div>
        <Dag dag="Idag" temperaturdatadag={this.props.temparraydagett} />
        <Dag dag="I morgon" temperaturdatadag={this.props.temparraydagtva}/>
        <Dag dag="I övermorgon" temperaturdatadag={this.props.temparraydagtre}/>
    </div>
    );
  }
}

export default Daglista;
