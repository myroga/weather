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
componentDidMount(){
  const tempArrayIdag = [];
  const tempArraymorgon = [];
  const tempArrayIovermorgon = [];
  const timeArrayIdag = [];
  const timeArrayImorgon = [];
  const timeArrayIovermorgon = [];

  const url = "https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/13.191000/lat/55.704700/data.json";
  fetch (url)
  .then(response => response.json())
  .then(json => {
    const idag = new Date();
    const idagString = idag.toLocaleString().slice(0, 10);
    const imorgon = new Date(idag.setDate(idag.getDate()+1));
    const imorgonString = imorgon.toLocaleString().slice(0, 10);
    const iovermorgon = new Date(idag.setDate(idag.getDate()+1));
    const iovermorgonString = iovermorgon.toLocaleString().slice(0, 10);
    json.timeSeries.map(timeSeriesItem =>{
      const {validTime, parameters } = timeSeriesItem;
      if(validTime.startsWith(idagString)){
        let tid = validTime;
        let temperature = timeSeriesItem.parameters.filter(element => {
          return element.name === "t";
        })[0].values[0];
        //timeArrayIdag.puch(tid);
        tempArrayIdag.push(temperature);
        timeArrayIdag.push(tid);
      }else if (validTime.startsWith(imorgonString)){
        let tid = validTime;
        let temperature = timeSeriesItem.parameters.filter(element => {
          return element.name === "t";
        })[0].values[0];
        timeArrayImorgon.push(tid);
        tempArraymorgon.push(temperature);
      }else if (validTime.startsWith(iovermorgonString)){
        let tid = validTime;
        let temperature = timeSeriesItem.parameters.filter(element => {
          return element.name === "t";
        })[0].values[0];
        timeArrayIovermorgon.push(tid);
        tempArrayIovermorgon.push(temperature);
      }
    });
    //console.log(timeArrayIdag);
    //console.log(timeArrayImorgon);
    //console.log(timeArrayIovermorgon);
  })
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
