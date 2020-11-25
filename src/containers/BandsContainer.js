import React, { Component } from 'react'
import BandInput from '../components/BandInput';
import { connect } from 'react-redux'

class BandsContainer extends Component {
  renderBands = () =>{
    return this.props.bands.map((band, id) =>
      <li key={id}>{band.name}</li>
    )
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        <div>
          {this.renderBands()}
        </div>
      </div>
    )
  }
}

const msp = state =>{
  return{
    bands: state.bands
  }
}

const mdp = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })

export default connect(msp, mdp)(BandsContainer)
