import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { get } from 'lodash';
import { Button } from 'reactstrap';
import Actions from '../../redux/Actions';
import MyNavbar from '../MyNavbar';
class AllSchool extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.props
      .allSchool()
      .then(() => console.log('hello pakistan', this.props));
  }

  moveto = routeName => {
    this.props.history.push(routeName);
  };

  render() {
    return (
      <div>
        <MyNavbar moveTo={this.moveto} />
        <h1>All Schools</h1>
        {get(this.props, 'allSchool').map(school => (
          <h1>{school}</h1>
        ))}
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  allSchool: state => get(state, 'school.allschool'),
});
const mapDispatchToProps = dispatch => ({
  allSchool: payload =>
    new Promise((resolve, reject) =>
      dispatch(Actions.allSchoolRequest(payload, resolve, reject)),
    ),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AllSchool);
