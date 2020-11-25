
import React, { Component } from 'react';

class BandInput extends Component {

  state = {
    name: ''
  }

  changeHandler = e => {
    this.setState({name: e.target.value});
  }

  submitHandler= e => {
    e.preventDefault();
    this.props.addBand(this.state);
    this.setState({name: ''});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            value={this.state.name}
            onChange={this.changeHandler} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default BandInput;
