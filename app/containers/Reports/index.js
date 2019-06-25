import React, { Component } from 'react'
import { connect } from 'react-redux'
import Actions from '../../redux/Actions'
import { createStructuredSelector } from 'reselect'
import { get } from 'lodash'
import { Button } from 'reactstrap';

class Reports extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.props.getDistrict()
      .then(() =>
        console.log("hello pakistan", get(this.props))
      )
  }
  render() {
    return (
      <div>
        <h1>my page is load</h1>
        {get(this.props, 'allDistricts').map((district) =>
          <h1>{district}</h1>
        )}
      </div>
    )
  }
}
const mapStateToProps = createStructuredSelector({
  allDistricts: (state) => get(state, 'school.districts'),
})
const mapDispatchToProps = (dispatch) => ({
  getDistrict: (payload) => new Promise((resolve, reject) =>
    dispatch(Actions.getDistrictsRequest(payload, resolve, reject))),

})
export default connect(mapStateToProps, mapDispatchToProps)(Reports)
