import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { get } from 'lodash';
import { Badge, Table } from 'reactstrap';
import Actions from '../../redux/Actions';
import MyNavbar from '../MyNavbar';

class AllReports extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props
      .fetchAllReports()
      .then(console.log('hello pakistan', this.props));
  }

  moveto = routeName => {
    this.props.history.push(routeName);
  };

  render() {
    let i = 1;
    return (
      <div>
        <MyNavbar moveTo={this.moveto} />
        <h2><Badge color="secondary">Reports</Badge></h2>
        <Table bordered>
          <thead>
            <tr>
              <th>#</th>
              <th>School Name</th>
              <th>Report Created Date</th>
              <th>Disagree</th>
              <th>Agree</th>
              <th>Removed Status</th>
              <th>Removed By</th>
              <th>Removed Date</th>
              <th>Report Address</th>
              <th>Report Date</th>
              {/* <th>9</th> */}
              <th>User Name</th>
              <th>Phone Number</th>
              <th>User Active Status</th>
              <th>Authencity</th>
              <th>Total Comments</th>
            </tr>
          </thead>
          <tbody>
            {get(this.props, 'allReports').map(report => (
              <tr>
                <td>{i++}</td>
                <td>{report.school.school_name}</td>
                <td>{report.created_at}</td>
                <td>{report.dis_agree}</td>
                <td>{report.agree}</td>
                <td>{report.is_removed}</td>
                <td>{report.removed_by}</td>
                <td>{report.removed_date}</td>
                <td>{report.report_address}</td>
                <td>{report.report_date}</td>
                {/* <td>{report.report_text}</td> */}
                <td>{report.user.user_name}</td>
                <td>{report.user.phone_number}</td>
                <td>{report.user.is_active}</td>
                <td>{report.authencity}</td>
                <td>{report.total_comments}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  allReports: state => get(state, 'school.allReports'),
});
const mapDispatchToProps = dispatch => ({
  fetchAllReports: payload =>
    new Promise((resolve, reject) =>
      dispatch(Actions.allReportsRequest(payload, resolve, reject)),
    ),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AllReports);
