import React, { Component } from 'react';
import Dag from"./Dag"


class Daglista extends Component {
  render() {
    return (
    <div>
        <Dag 
            dag="Idag" 
            temperaturdatadag={this.props.temparraydagett}
            vinddatadag={this.props.vindarraydagett} 
            vindbydatadag={this.props.vindbyarraydagett} 
            wsymb={this.props.wsymbdagett}/>
        <Dag 
            dag="I morgon" 
            temperaturdatadag={this.props.temparraydagtva}
            vinddatadag={this.props.vindarraydagtva}
            vindbydatadag={this.props.vindbyarraydagtva} 
            wsymb={this.props.wsymbdagtva}/>
        <Dag 
            dag="I övermorgon" 
            temperaturdatadag={this.props.temparraydagtre}
            vinddatadag={this.props.vindarraydagtre}
            vindbydatadag={this.props.vindbyarraydagtre} 
            wsymb={this.props.wsymbdagtre}/>
    </div>
    );
  }
}

export default Daglista;
