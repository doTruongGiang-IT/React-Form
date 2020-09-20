import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      description: '',
      gender: 'male',
      language: 'vietnamese',
      status: true
    };
  };

  onHandleChange = (e) => {
    let name = e.target.name;
    let value = (e.target.type === 'checkbox') ? e.target.checked : e.target.value;
    this.setState( {
      [name]: value
    } );
  };

  submitForm = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="App mt-4">
        
          <div className="card col-8 ml-15">
            <div className="card-header">
              Form
            </div>
            <div className="card-body">
              <form onSubmit={this.submitForm}>
                <div className="form-group">
                  <label>User Name</label>
                  <input type="text" className="form-control" id="username" name="username" placeholder="Enter user name" onChange={this.onHandleChange} />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" id="password" name="password" placeholder="Password" onChange={this.onHandleChange} />
                </div>

                <div className="form-group">
                  <label>Describe</label>
                  <textarea rows="3" className="form-control" id="textarea" name="description" onChange={this.onHandleChange}></textarea>
                </div>

                <div className="form-group">
                  <label>Gender</label>
                  <select className="form-control" id="gender" name="gender" value={this.state.gender} onChange={this.onHandleChange}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Languages</label>
                  <input type="radio" className="form-control" name="language" value="english" onChange={this.onHandleChange} checked={this.state.language === "english"} /> English
                  <input type="radio" className="form-control" name="language" value="vietnamese" onChange={this.onHandleChange} checked={this.state.language === "vietnamese"} /> VietNamese
                </div>

                <div className="form-group">
                  <label>Languages</label>
                  <input type="checkbox" className="form-control" name="status" value={true} onChange={this.onHandleChange} checked={this.state.status === true} /> Status
                </div>

                <button type="submit" className="btn btn-primary mr-2">Submit</button>
                <button type="reset" className="btn btn-primary">Clear</button>
              </form>
            </div>
          </div>
        
      </div>
    );
  }
}

export default App;
