import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import {connect} from 'react-redux'

class BandsContainer extends Component {
  renderBands = () => {
    return this.props.bands.map( (band, idx) => <li key={idx}>{band.name}</li>)
  }
  render() {
    console.log(this.props);
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <div>
          {this.renderBands()}
        </div>
      </div>
    )
  }
}

const mstp = state => {
  return {bands: state.bands}
}

const mdtp = dispatch => {
  return {
    addBand: payload => dispatch({
      type: "ADD_BAND",
      payload
    })
  }
}

export default connect(mstp,mdtp)(BandsContainer)
