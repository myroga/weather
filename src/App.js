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
      label: 'Nederbord',
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
      label: 'Nederbord',
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
      label: 'Nederbord',
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
    label: 'Moln',
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
    label: 'Moln',
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
    label: 'Moln',
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
  const tempArrayImorgon = [];
  const tempArrayIovermorgon = [];
  const timeArrayIdag = [];
  const timeArrayImorgon = [];
  const timeArrayIovermorgon = [];
  const windArrayIdag = [];
  const windArrayImorgon = [];
  const windArrayIovermorgon = [];
  const gustArrayIdag = [];
  const gustArrayImorgon = [];
  const gustArrayIovermorgon = [];
  const rArrayIdag = [];
  const rArrayImorgon = [];
  const rArrayIovermorgon = [];
  const tcc_meanArrayIdag = [];
  const tcc_meanArrayImorgon = [];
  const tcc_meanArrayIovermorgon = [];

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
      const tid = new Date(validTime);
      const tidString = `kl. ${tid.getHours().toString()}`;
      let temperature = timeSeriesItem.parameters.filter(element => {
        return element.name === "t";
      })[0].values[0];
      let windspeed = timeSeriesItem.parameters.filter(element => {
        return element.name === "ws";
      })[0].values[0];
      let gust = timeSeriesItem.parameters.filter(element => {
        return element.name === "gust";
      })[0].values[0];
      let tcc_mean = timeSeriesItem.parameters.filter(element => {
        return element.name === "tcc_mean";
      })[0].values[0];
      let r = timeSeriesItem.parameters.filter(element => {
        return element.name === "r";
      })[0].values[0];
      if(validTime.startsWith(idagString)){
        //timeArrayIdag.puch(tidString);
        timeArrayIdag.push(tidString);
        tempArrayIdag.push(temperature);
        windArrayIdag.push(windspeed);
        gustArrayIdag.push(gust);
        tcc_meanArrayIdag.push(tcc_mean);
        rArrayIdag.push(r);
      }else if (validTime.startsWith(imorgonString)){
        timeArrayImorgon.push(tidString);
        tempArrayImorgon.push(temperature);
        windArrayImorgon.push(windspeed);
        gustArrayImorgon.push(gust);
        tcc_meanArrayImorgon.push(tcc_mean);
        rArrayImorgon.push(r);
      }else if (validTime.startsWith(iovermorgonString)){
        timeArrayIovermorgon.push(tidString);
        tempArrayIovermorgon.push(temperature);
        windArrayIovermorgon.push(windspeed);
        gustArrayIovermorgon.push(gust);
        tcc_meanArrayIovermorgon.push(tcc_mean);
        rArrayIovermorgon.push(r);
      }
    });
    this.setState(prevState => {
      prevState.tempDiaett.labels = timeArrayIdag;
      prevState.tempDiaett.datasets[0].data = tempArrayIdag;
      prevState.tempDiatva.labels = timeArrayImorgon;
      prevState.tempDiatva.datasets[0].data = tempArrayImorgon;
      prevState.tempDiatre.labels = timeArrayIovermorgon;
      prevState.tempDiatre.datasets[0].data = tempArrayIovermorgon;

      prevState.VindDiaett.labels = timeArrayIdag;
      prevState.VindDiaett.datasets[0].data = windArrayIdag;
      prevState.VindDiaett.datasets[1].data = gustArrayIdag;
      prevState.VindDiatva.labels = timeArrayImorgon;
      prevState.VindDiatva.datasets[0].data = windArrayImorgon;
      prevState.VindDiatva.datasets[1].data = gustArrayImorgon;
      prevState.VindDiatre.labels = timeArrayIovermorgon;
      prevState.VindDiatre.datasets[0].data = windArrayIovermorgon;
      prevState.VindDiatre.datasets[1].data = gustArrayIovermorgon;

      prevState.nederbordDiaett.labels = timeArrayIdag;
      prevState.nederbordDiaett.datasets[0].data = rArrayIdag;
      prevState.nederbordDiatva.labels = timeArrayImorgon;
      prevState.nederbordDiatva.datasets[0].data = rArrayImorgon;
      prevState.nederbordDiatre.labels = timeArrayIovermorgon;
      prevState.nederbordDiatre.datasets[0].data = rArrayIovermorgon;

      prevState.molnDiaett.labels = timeArrayIdag;
      prevState.molnDiaett.datasets[0].data = tcc_meanArrayIdag;
      prevState.molnDiatva.labels = timeArrayImorgon;
      prevState.molnDiatva.datasets[0].data = tcc_meanArrayImorgon;
      prevState.molnDiatre.labels = timeArrayIovermorgon;
      prevState.molnDiatre.datasets[0].data = tcc_meanArrayIovermorgon;
    })
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
