import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { get } from 'lodash';
import { Button, Table } from 'reactstrap';
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
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th>7</th>
              <th>8</th>
              <th>9</th>
              <th>10</th>
              <th>11</th>
              <th>12</th>
              <th>13</th>
              <th>14</th>
              <th>15</th>
              <th>16</th>
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
                <td>{report.report_text}</td>
                <td>{report.user.user_name}</td>
                <td>{report.user.phone_number}</td>
                <td>{report.user.is_active}</td>
                <td>{report.authencity}</td>
                <td>{report.total_comments}</td>
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
