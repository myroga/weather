import React, { Component } from 'react';
import './App.css';
import Daglista from "./components/Daglista"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      tempDiaett: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        { 
        label: 'Temperatur',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        BorderWidth: 1,
        HoverBackgroundColor: 'rgba(75,192,192,1)',
        HoverBorderColor: 'rgba(220,220,220,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    },
    tempDiatva: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        { 
        label: 'Temperatur',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        BorderWidth: 1,
        HoverBackgroundColor: 'rgba(75,192,192,1)',
        HoverBorderColor: 'rgba(220,220,220,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    },
    tempDiatre: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        { 
        label: 'Temperatur',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        BorderWidth: 1,
        HoverBackgroundColor: 'rgba(75,192,192,1)',
        HoverBorderColor: 'rgba(220,220,220,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    },
    VindDiaett: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
        { 
        label: 'Vindstyrka',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        BorderWidth: 1,
        HoverBackgroundColor: 'rgba(75,192,192,1)',
        HoverBorderColor: 'rgba(220,220,220,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
        },
        { 
        label: 'Byvindstyrka',
        backgroundColor: 'rgba(200,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        BorderWidth: 1,
        HoverBackgroundColor: 'rgba(75,192,192,1)',
        HoverBorderColor: 'rgba(220,220,220,1)',
        data: [75, 79, 60, 91, 66, 65, 50]
        }
      ]
    },
      VindDiatva: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          { 
          label: 'Vindstyrka',
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          BorderWidth: 1,
          HoverBackgroundColor: 'rgba(75,192,192,1)',
          HoverBorderColor: 'rgba(220,220,220,1)',
          data: [65, 59, 80, 81, 56, 55, 40]
          },
          { 
          label: 'Byvindstyrka',
          backgroundColor: 'rgba(200,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          BorderWidth: 1,
          HoverBackgroundColor: 'rgba(75,192,192,1)',
          HoverBorderColor: 'rgba(220,220,220,1)',
          data: [75, 79, 60, 91, 66, 65, 50]
          }
        ]
      },
      VindDiatre: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          { 
          label: 'Vindstyrka',
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          BorderWidth: 1,
          HoverBackgroundColor: 'rgba(75,192,192,1)',
          HoverBorderColor: 'rgba(220,220,220,1)',
          data: [65, 59, 80, 81, 56, 55, 40]
          },
          { 
          label: 'Byvindstyrka',
          backgroundColor: 'rgba(200,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          BorderWidth: 1,
          HoverBackgroundColor: 'rgba(75,192,192,1)',
          HoverBorderColor: 'rgba(220,220,220,1)',
          data: [75, 79, 60, 91, 66, 65, 50]
          }
        ]
      },
      nederbordDiaett: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        { 
        label: 'Temperatur',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        BorderWidth: 1,
        HoverBackgroundColor: 'rgba(75,192,192,1)',
        HoverBorderColor: 'rgba(220,220,220,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    },
    nederbordDiatva: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        { 
        label: 'Temperatur',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        BorderWidth: 1,
        HoverBackgroundColor: 'rgba(75,192,192,1)',
        HoverBorderColor: 'rgba(220,220,220,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    },
    nederbordDiatre: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        { 
        label: 'Temperatur',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        BorderWidth: 1,
        HoverBackgroundColor: 'rgba(75,192,192,1)',
        HoverBorderColor: 'rgba(220,220,220,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    },
    molnDiaett: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      { 
      label: 'Temperatur',
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      BorderWidth: 1,
      HoverBackgroundColor: 'rgba(75,192,192,1)',
      HoverBorderColor: 'rgba(220,220,220,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  },
  molnDiatva: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      { 
      label: 'Temperatur',
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      BorderWidth: 1,
      HoverBackgroundColor: 'rgba(75,192,192,1)',
      HoverBorderColor: 'rgba(220,220,220,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  },
  molnDiatre: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      { 
      label: 'Temperatur',
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      BorderWidth: 1,
      HoverBackgroundColor: 'rgba(75,192,192,1)',
      HoverBorderColor: 'rgba(220,220,220,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  }
    };
  }
  render() {
    return (
      <div className="App">
        <Daglista 
        temparraydagett={this.state.tempDiaett}
        temparraydagtva={this.state.tempDiatva}
        temparraydagtre={this.state.tempDiatre}
        vindarraydagett={this.state.VindDiaett}
        vindarraydagtva={this.state.VindDiatva}
        vindarraydagtre={this.state.VindDiatre}
        vindbyarraydagett={this.state.VindbyDiaett}
        vindbyarraydagtva={this.state.VindbyDiatva}
        vindbyarraydagtre={this.state.VindbyDiatre}
        nederbordarraydagett={this.state.nederbordDiaett}
        nederbordarraydagtva={this.state.nederbordDiatva}
        nederbordarraydagtre={this.state.nederbordDiatre}
        molnarraydagett={this.state.molnDiaett}
        molnarraydagtva={this.state.molnDiatva}
        molnarraydagtre={this.state.molnDiatre}
        wsymbdagett="1"
        wsymbdagtva="3"
        wsymbdagtre="8"
        />
      </div>
    );
  }
}

export default App;
