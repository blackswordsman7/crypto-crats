import React, { Component } from 'react';
import Nav from '../components/Nav';
import { Card } from 'react-md';
import {
  Button
} from 'react-md';
import {
  Avatar,
  List,
  ListItemControl,
  SVGIcon
} from 'react-md';

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
        <Card style={{maxWidth: '400px', margin: 'auto', marginTop: '20px', textAlign: 'center', padding: '10px'}}>
          <b>{this.state.price}</b> Krishi Mudra = <b>Rs. {this.state.eq_rs}</b>
        </Card>
        <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
          <Card style={{margin: '10px',minWidth: '300px', marginTop: '20px', padding: '10px'}}>
            <h3>Open Fundings</h3>
            <List>
              {this.state.crops.map((e, i) => {
                  return <ListItemControl
                  key={i}
                  primaryText={"hello"}
                  secondaryAction={
                    <Button icon secondary iconClassName="fa fa-star-o" />
                  }/>
              })}
            </List>
            <div hidden={!(this.state.crops.length === 0)}>No open fundings...</div>
          </Card>
          <Card style={{margin: '10px',minWidth: '300px', marginTop: '20px', padding: '10px'}}>
          <h3>Transation History</h3>
          <div hidden={!(this.state.transactions.length === 0)}>No Transaction History...</div>
          </Card>
        </div>
      </div>
    );
  }
}


export default Investors;
