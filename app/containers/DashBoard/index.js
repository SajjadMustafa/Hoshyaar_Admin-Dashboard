import React, { Component } from 'react'
import { connect } from 'react-redux'
import Actions from '../../redux/Actions'
import 'bootstrap/dist/css/bootstrap.css';
import { createStructuredSelector } from 'reselect'
import { get } from 'lodash'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };

  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Hoshyaar Admin Panel</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {/* <NavItem>
                <NavLink href="">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem> */}
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Sajjad Mustafa
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Password Change
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        <Nav vertical>
          <NavItem>
            <NavLink href="#">All Users</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">All Reports</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Total School</NavLink>
          </NavItem>
        </Nav>
      </div>
    )
  }
}
const mapStateToProps = createStructuredSelector({
})
const mapDispatchToProps = (dispatch) => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)
