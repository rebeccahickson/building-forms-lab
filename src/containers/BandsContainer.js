import React, { Component } from "react";
import { connect } from "react-redux";
import BandInput from "../components/BandInput";

class BandsContainer extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.bands.map((band) => (
            <li key={band.name}>{band.name}</li>
          ))}
        </ul>
        <BandInput addBand={this.props.manageBands} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  manageBands: (band) => dispatch({ type: "ADD_BAND", band }),
});

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
