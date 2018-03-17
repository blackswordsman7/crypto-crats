import React, { Component } from 'react';
import Nav from '../components/Nav';
import Web3 from 'web3';
import { Card, Subheader } from 'react-md';
import {
  Button,
  FontIcon,
  SVGIcon,
  TextField,
} from 'react-md';
import {
  Avatar,
  List,
  ListItem,
  ListItemControl,
  Checkbox,
  Switch
} from 'react-md';
import ChartistGraph from 'react-chartist';

const CLASS_NAME = 'md-cell md-cell--6 md-paper md-paper--1';
var biPolarBarChartData = {
  labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
  series: [
    [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
  ]
};
var biPolarBarChartOptions = {
  high: 10,
  low: -10,
  axisX: {
    labelInterpolationFnc: function(value, index) {
      return index % 2 === 0 ? value : null;
    }
  }
}
class Investors extends Component {
  state = {
    username: "",
    price: "2131",
    eq_rs: "31331",
    crops: [1,2,3],
    transactions: []
  }

  requirement_submit(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div style={{height: '100vh', background: 'linear-gradient(217deg, rgba(0,255,0,.8), rgba(255,0,0,0) 70.71%)'}}>
        <Nav/>
        <Card style={{margin: '10px', maxWidth: '400px', margin: 'auto', marginTop: '20px', textAlign: 'center', padding: '10px'}}>
          <ChartistGraph data={biPolarBarChartData} options={biPolarBarChartOptions} type={'Line'} />
          <b>{this.state.price}</b> Krishi Mudra = <b>Rs. {this.state.eq_rs}</b>
        </Card>
        <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
          <Card style={{margin: '10px',minWidth: '300px', marginTop: '20px', padding: '10px'}}>
            <h3>Open Fundings</h3>
            <List>
              {this.state.crops.map((e, i) => {
                  <ListItemControl
                  leftAvatar={<Avatar suffix="teal">{e.name}</Avatar>}
                  secondaryAction={
                    <Button raised primary>
                      Fund
                    </Button>
                  }/>
              })}
            </List>
            <div hidden={!this.state.crops.length === 0}>No open fundings...</div>
          </Card>
          <Card style={{margin: '10px',minWidth: '300px', marginTop: '20px', padding: '10px'}}>
          <h3>Transation History</h3>
          <div hidden={!this.state.transactions.length === 0}>No Transaction History...</div>
          </Card>
        </div>
      </div>
    );
  }
}


export default Investors;
