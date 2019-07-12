import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import { createStructuredSelector } from 'reselect';
import { get } from 'lodash';
import { Table, Button } from 'reactstrap';
import MyNavbar from '../MyNavbar';
import Actions from '../../redux/Actions';

class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  componentDidMount() {
    this.props.fetchAllUsers().then(console.log('dsfsaf'));
  }

  moveto = routeName => {
    this.props.history.push(routeName);
  };

  toggleStatusButton = id => {
    this.props
      .toggleStatus({
        user_id: id,
      })
      .then(() => {
        console.log('User Toggle');
      });
  };

  render() {
    let i = 1;
    return (
      <div>
        <MyNavbar moveTo={this.moveto} />
        {get(this.props, 'allUsers').map(user => (
          <h1>{console.log('user: ', user)}</h1>
        ))}
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>Phone Number</th>
              <th>User Name</th>
              <th>Address</th>
              <th>Interested schools</th>
              <th>Report</th>
              <th>Comment</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {get(this.props, 'allUsers').map(user => (
              <tr>
                <td>{i++}</td>
                <td>{user.id}</td>
                <td>{user.phone_number}</td>
                <td>{user.user_name}</td>
                <td>{user.address}</td>
                <td>{user.interested_school_count}</td>
                <td>{user.total_reports}</td>
                <td>{user.total_comments}</td>
                <td>
                  <Button
                    onClick={() => this.toggleStatusButton(user.id)}
                    variant="primary"
                  >
                    {user.is_active ? 'Active' : 'Inactive'}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  allUsers: state => get(state, 'school.users'),
});
const mapDispatchToProps = dispatch => ({
  fetchAllUsers: payload =>
    new Promise((resolve, reject) =>
      dispatch(Actions.allUsersRequest(payload, resolve, reject)),
    ),
  toggleStatus: payload =>
    new Promise((resolve, reject) =>
      dispatch(Actions.toggleStatusRequest(payload, resolve, reject)),
    ),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashBoard);
