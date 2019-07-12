import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { get } from 'lodash';
import { Button, Badge, Table } from 'reactstrap';
import Actions from '../../redux/Actions';
import MyNavbar from '../MyNavbar';

class AllSchool extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  moveto = routeName => {
    this.props.history.push(routeName);
  };
  componentDidMount() {
    this.props
      .fetchAllSchool()
      .then(console.log('hello pakistan', this.props));
  }

  render() {
    let i = 1;
    return (
      <div>
        <MyNavbar moveTo={this.moveto} />
        <h2><Badge color="secondary">School Information</Badge></h2>
        <Table bordered size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>EMIS</th>
              <th>District</th>
              <th>Tehsil</th>
              <th>School Name</th>
              <th>Markaz</th>
              <th>School Level</th>
              <th>Total Reports</th>
              <th>Total Interested People</th>
            </tr>
          </thead>
          <tbody>
            {get(this.props, 'allSchool').map(school => (
              <tr>
                <td>{i++}</td>
                <td>{school.emis}</td>
                <td>{school.district}</td>
                <td>{school.tehsil}</td>
                <td>{school.school_name}</td>
                <td>{school.markaz}</td>
                <td>{school.school_level}</td>
                <td>{school.total_reports}</td>
                <td>{school.total_intested_user}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  allSchool: state => get(state, 'school.allschool'),
});
const mapDispatchToProps = dispatch => ({
  fetchAllSchool: payload =>
    new Promise((resolve, reject) =>
      dispatch(Actions.allSchoolRequest(payload, resolve, reject)),
    ),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AllSchool);
