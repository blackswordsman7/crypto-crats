import React, { Component } from 'react';
import Nav from '../components/Nav';
import { Card } from 'react-md';
import {
  Button,
  TextField,
} from 'react-md';

class Farmer extends Component {
  state = {
    user: "",
    requirements: "",
    price: "2131",
    eq_rs: "31331",
    products: [],
    transactions: []
  }

  componentDidMount() {
    let data = localStorage.getItem('user_data')
    if (!data) {
      this.props.history.push('/')
    }
    this.setState({user: JSON.parse(data)})
  }

  requirement_submit(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div style={{height: '100vh', background: 'linear-gradient(217deg, rgba(0,255,0,.8), rgba(255,0,0,0) 70.71%)'}}>
        <Nav/>
        <Card style={{maxWidth: '400px', margin: 'auto', marginTop: '20px', textAlign: 'center', padding: '10px'}}>
          <b>{this.state.price}</b> Aadhar Coin = <b>Rs. {this.state.eq_rs}</b>
          <br/>
          Address: <b>{this.state.user.address}</b>
        </Card>
        <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
          <Card style={{margin: '10px',minWidth: '300px', marginTop: '20px', padding: '10px'}}>
          <h3>Add Requirement</h3>
          <form onSubmit={(e) => this.requirement_submit(e)}>
            <TextField
              id="phone-number"
              label="Phone"
              fullWidth
            />
            <TextField
              id="aadhar"
              label="Aadhar Number"
              fullWidth
            />
            <TextField
              id="capital"
              label="Capital to be raised"
              fullWidth
            />
            <TextField
              id="time"
              label="Time Duration"
              fullWidth
            />
            <TextField
              id="type"
              label="Crop Name | Type"
              fullWidth
            />
            <div className="md-text-center" style={{marginTop: '20px'}}>
              <Button 
                type="submit" 
                raised 
                primary>
                Request
              </Button>
            </div>
            </form>
          </Card>
          <Card style={{margin: '10px',minWidth: '300px', marginTop: '20px', padding: '10px'}}>
          <h3>Transation History</h3>
          <p hidden={!this.state.transactions.length === 0}>No Transaction History...</p>
          </Card>
          <Card style={{margin: '10px',minWidth: '300px', marginTop: '20px', padding: '10px'}}>
            <h3>Agro Products</h3>
            <div hidden={!this.state.products.length === 0}>No Products available...</div>
          </Card>
        </div>
      </div>
    );
  }
}


export default Farmer;
