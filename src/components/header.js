import React, { Component } from "react";

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarToggler,
  Collapse,
  ModalHeader,
  ModalBody,
  Input,
  Label,
  Form,
  FormGroup,
  Button,
} from "reactstrap";

import Modal from "react-modal";
import { NavLink, HashRouter } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isNavOpen: false, isModalOpen: false };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  toggleNav() {
    this.setState({ isNavOpen: !this.state.isNavOpen });
  }
  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }
  handleLogin(event) {
    this.toggleModal();
    alert(
      "Username: " +
        this.username.value +
        " Password: " +
        this.password.value +
        " Remember: " +
        this.remember.checked
    );
    event.preventDefault();
  }
  render() {
    return (
      <React.Fragment>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />

            <Collapse isOpen={this.state.isNavOpen} navbar>
              <NavbarBrand className="mr_auto" href="/">
                <img
                  src="/assets/images/alberto.png"
                  height="30"
                  width="40"
                  alt="alberto"
                />
              </NavbarBrand>
              <Nav navbar>
                <HashRouter>
                  <NavItem>
                    <NavLink className="nav-Link" to="/home">
                      <span className="fa fa-home fa-lg"></span>
                      Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-Link" to="/menu">
                      <span className="fa fa-user-o"></span>Nhân viên
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-Link" to="/phongban">
                      <span className="fa fa-address-card-o"></span>Phòng bang
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-Link" to="/bangluong">
                      <span className="fa fa-cc-diners-club"></span>Bảng lương
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-Link" to="/timkiem">
                      <span className="fa fa-search"></span>Tìm kiếm
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-Link" to="/them">
                      <span className="fa fa-superpowers"></span>Quản lý nhân
                      viên
                    </NavLink>
                  </NavItem>
                </HashRouter>
              </Nav>
              <Nav className="ml" navbar>
                <NavItem>
                  <Button className="btt" onClick={this.toggleModal}>
                    <span className="fa fa-sign-in fa-lg"></span> Login
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Modal title</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input
                  type="text"
                  id="username"
                  name="username"
                  innerRef={(input) => (this.username = input)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  innerRef={(input) => (this.password = input)}
                />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="remember"
                    innerRef={(input) => (this.remember = input)}
                  />
                  Remember me
                </Label>
              </FormGroup>
              <Button type="submit" value="submit" color="primary">
                Login
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}
export default Header;
