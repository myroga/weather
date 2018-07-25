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
            nederborddatadag={this.props.nederbordarraydagett} 
            molndatadag={this.props.molnarraydagett} 
            wsymb={this.props.wsymbdagett}/>
        <Dag 
            dag="I morgon" 
            temperaturdatadag={this.props.temparraydagtva}
            vinddatadag={this.props.vindarraydagtva}
            vindbydatadag={this.props.vindbyarraydagtva}
            nederborddatadag={this.props.nederbordarraydagtva}
            molndatadag={this.props.molnarraydagtva} 
            wsymb={this.props.wsymbdagtva}/>
        <Dag 
            dag="I övermorgon" 
            temperaturdatadag={this.props.temparraydagtre}
            vinddatadag={this.props.vindarraydagtre}
            vindbydatadag={this.props.vindbyarraydagtre}
            nederborddatadag={this.props.nederbordarraydagtre}
            molndatadag={this.props.molnarraydagtre} 
            wsymb={this.props.wsymbdagtre}/>
    </div>
    );
  }
}

export default Daglista;
