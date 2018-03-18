import React, { Component } from 'react';
import {
    Card,
    Button,
    TextField,
    SelectField
}  from 'react-md';
import axios from 'axios';
import { LinearProgress } from 'react-md';

const select_items = [{
  title: 'Farmer',
  value: 'farmer',
},
{
  title: 'Investor',
  value: 'investor',
},
{
  title: 'Merchant',
  value: 'merchant',
}];

class Home extends Component {
  state = {
    username: '',
    password: '',
    s_username: '',
    s_type: '',
    s_password: '',
    error: '',
    s_name: '',
    loading: false,
    address: ''
  }

  login(e) {
    e.preventDefault();
    this.setState({loading: true, error: ''})
    if (this.state.username.trim() && this.state.password.trim()) {
      axios.post("https://cryptocrats.herokuapp.com/v1/user/login", 
      {
        username: this.state.username, 
        password: this.state.password
      })
      .then(data => {
        localStorage.setItem("loggedIn", 1);
        localStorage.setItem("user_data", JSON.stringify(data.data.data));
        console.log(data)
        this.props.history.push(`/${data.data.data.entity}`);
      })
      .catch(err => {
        console.log(err)
        this.setState({loading: false})
        if (err.response) {
          this.setState({error: err.response.data.message})
        } else {
          this.setState({error: "An error occured"})
        }
      })
    } else {
        this.setState({loading: false})
        this.setState({error: "Please enter username and password"})
      }
  } 


  componentDidMount() {
    if (window.web3 && window.web3.currentProvider.isMetaMask) {
      window.web3.eth.getAccounts((error, accounts) => {
        this.setState({address: accounts[0]});
      });
    } else {
      this.setState('MetaMask account not detected :(');
    }
  }

  signup(e) {
    e.preventDefault();    
    this.setState({loading: true, error: ''})
    if (this.state.address && this.state.s_username.trim() && this.state.s_password.trim()) {
      axios.post("https://cryptocrats.herokuapp.com/v1/user/register", 
      {
        username: this.state.s_username, 
        password: this.state.s_password,
        name: this.state.s_name,
        entity: this.state.s_type,
        address: this.state.address
      })
      .then(data => {
        localStorage.setItem("loggedIn", 1);
        this.props.history.push(`/${this.state.s_type}`);
      })
      .catch(err => {
        console.log(err)
        this.setState({loading: false})
        if (err.response.data) {
          this.setState({error: err.response.data.message})
        } else {
          this.setState({error: "An error occured"})
        }
      })
    } else {
        this.setState({loading: false})
        this.setState({error: "An error occurred"})
      }
  } 

  render() {
    return (
      <div>
      <h4 style={{textAlign: 'center', marginTop: '20px'}}>Krishi Mitra: A decentralized eco-system</h4>
      <div style={{display: 'flex', justifyContent:'center', flexWrap: 'wrap',  height: '100vh', background: 'linear-gradient(217deg, rgba(0,255,0,.8), rgba(255,0,0,0) 70.71%)'}}>
      <p style={{color: '#ff0000', textAlign: 'center'}}>{this.state.error}</p>
      <div hidden={!this.state.loading}>
        <LinearProgress id={"loader"}  style={{background: '#40c4ff'}}/>
      </div>
      <Card style={{margin: '10px', maxHeight: '400px', marginTop: '40px'}}>
        <div style={{padding: '60px'}}>
        <h3 className='md-text-center'>
          Login
        </h3>
        <form className="loginForm" onSubmit={(e) => this.login(e)}>
          <TextField
            id="username"
            label="Username"
            value={this.state.username}
            onChange={data => this.setState({username: data})}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            value={this.state.password}
            onChange={data => this.setState({password: data})}
          />
          <div className="md-text-center" style={{marginTop: '20px'}}>
            <Button
            type="submit" 
            raised 
            primary>
              Login
            </Button>
            </div>
          </form>
        </div>
      </Card>
      <Card style={{margin: '10px', maxHeight: '500px', marginTop: '40px'}}>
        <div style={{padding: '60px'}}>
        <h3 className='md-text-center'>
          Sign Up
        </h3>
        <form className="signupForm" onSubmit={(e) => this.signup(e)}>
          <TextField
            label="Address"
            value={this.state.address}
            disabled
          />
          <SelectField
            id="select-field-styling-1"
            label="Entity"
            fullWidth
            placeholder="Select Entity"
            menuItems={select_items}
            onChange={data => this.setState({s_type: data})}
          />
          <TextField
            id="s_name"
            label="Name"
            value={this.state.s_name}
            onChange={data => this.setState({s_name: data})}
          />
          <TextField
            id="s_username"
            label="Username"
            value={this.state.s_username}
            onChange={data => this.setState({s_username: data})}
          />
          <TextField
            id="s_password"
            label="Password"
            type="password"
            value={this.state.s_password}
            onChange={data => this.setState({s_password: data})}
          />
          <div className="md-text-center" style={{marginTop: '20px'}}>
            <Button
              type="submit" 
              raised 
              primary
            >
              Sign Up
            </Button>
            </div>
          </form>
        </div>
      </Card>
      </div>
      </div>
    );
  }
}


export default Home;
