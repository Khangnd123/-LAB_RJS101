import React, { Component } from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import { Loading } from "./LoadingComponent";
import { Control, LocalForm, Errors } from "react-redux-form";
import dateFormat from "dateformat";
import {
  Row,
  Label,
  Col,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
var a = 0;
class ThemNhanvien extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {},
      isModalOpen: false,
      isModalOpenPatch: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.toggleModal = this.toggleModal.bind(this);
    this.toggleModalPatch = this.toggleModalPatch.bind(this);
  }
  toggleModalPatch() {
    this.setState({ isModalOpenPatch: !this.state.isModalOpenPatch });
  }
  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  handleSubmitUdate(values) {
    //alert(values.salaryScaleup);
    let image = "/assets/images/alberto.png";
    let Luong =
      parseFloat(values.salaryScaleup) * 3000000 +
      parseFloat(values.overTimeup) * 300000;

    var kq = this.props.department.filter(
      (n) => n.name === values.departmentup
    )[0];
    console.log("kq", kq);
    if (typeof kq !== "undefined") {
      var t = kq.id;
    } else {
      t = "";
    }
    console.log("t", t);
    this.props.PatchNhanvien(
      this.props.nvien,
      values.idup,
      values.nameup,
      values.doBup,
      values.salaryScaleup,
      values.startDateup,
      String(t),
      values.annualLeaveup,
      values.overTimeup,
      image,
      Luong
    );
  }
  handleChange(values) {
    this.setState({ name: values });
  }
  handleSubmit(values) {
    let image = "/assets/images/alberto.png";
    let Luong =
      parseFloat(values.salaryScale) * 3000000 +
      parseFloat(values.overTime) * 300000;
    this.props.postNhanvien(
      this.props.nvien.length,
      values.name,
      values.doB,
      values.salaryScale,
      values.startDate,
      values.department,
      values.annualLeave,
      values.overTime,
      image,
      Luong
    );
  }
  handleClick = (value) => () => {
    this.props.xoa(value);
  };
  handleClickID = (id) => () => {
    var nvien = this.props.nvien[0];
  };
  render() {
    const setupdate = (id) => () => {
      alert(id);
    };

    const Updatestore = ({ match }) => {
      var nvien = this.props.nvien.filter((n) => {
        return n.id === parseInt(match.params.idsua, 10);
      });
      console.log(nvien);
      const ati = this.props.nvien
        .filter((n) => {
          return n.id === parseInt(match.params.idsua, 10);
        })
        .map((n) => {
          return (
            <LocalForm onSubmit={(values) => this.handleSubmitUdate(values)}>
              <Row className="form-group">
                <Label htmlFor="idup" md={3}>
                  ID
                </Label>
                <Col md={9}>
                  <Control.text
                    model=".idup"
                    id="idup"
                    name="idup"
                    defaultValue={n.id}
                    disabled
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="nameup" md={3}>
                  First Name
                </Label>
                <Col md={9}>
                  <Control.text
                    model=".nameup"
                    id="nameup"
                    name="nameup"
                    defaultValue={n.name}
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="doBup" md={3}>
                  doB
                </Label>
                <Col md={9}>
                  <Control.input
                    type="text"
                    model=".doBup"
                    id="doBup"
                    name="doBup"
                    defaultValue={dateFormat(n.doB, "dd/mm/yyyy")}
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="salaryScaleup" md={3}>
                  salaryScale
                </Label>
                <Col md={9}>
                  <Control.select
                    model=".salaryScaleup"
                    id="salaryScaleup"
                    name="salaryScaleup"
                    defaultValue={n.salaryScale}
                    className="form-control"
                  >
                    <option value="">Chọn salaryScale</option>
                    <option value="1">1</option>
                    <option value="1.1">1.1</option>
                    <option value="1.2">1.2</option>
                    <option value="1.3">1.3</option>
                    <option value="1.4">1.4</option>
                    <option value="1.5">1.5</option>
                    <option value="1.6">1.6</option>
                    <option value="1.7">1.7</option>
                    <option value="1.8">1.8</option>
                    <option value="1.9">1.9</option>
                    <option value="2.0">2</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="startDateup" md={3}>
                  startDate
                </Label>
                <Col md={9}>
                  <Control.text
                    type="text"
                    min="1"
                    max="31"
                    model=".startDateup"
                    id="startDateup"
                    name="startDateup"
                    defaultValue={dateFormat(n.doB, "dd/mm/yyyy")}
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="departmentup" md={3}>
                  department
                </Label>
                <Col md={9}>
                  <Control.select
                    model=".departmentup"
                    id="departmentup"
                    name="department"
                    defaultValue={tendepartment(n.departmentId)}
                    className="form-control"
                  >
                    {" "}
                    <option value="">Chọn department</option>
                    <option value="Sale">Sale</option>
                    <option value="HR">HR</option>
                    <option value="Marketing">Marketing</option>
                    <option value="IT">IT</option>
                    <option value="Finance">Finance</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="annualLeaveup" md={3}>
                  annualLeave
                </Label>
                <Col md={9}>
                  <Control.text
                    type="number"
                    min="1"
                    max="9"
                    model=".annualLeaveup"
                    id="annualLeaveup"
                    name="annualLeaveup"
                    defaultValue={n.annualLeave}
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="overTimeup" md={3}>
                  overTime
                </Label>
                <Col md={9}>
                  <Control.text
                    min="1"
                    max="31"
                    type="number"
                    model=".overTimeup"
                    id="overTimeup"
                    name="overTimeup"
                    defaultValue={n.overTime}
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="imageup" md={3}>
                  image
                </Label>
                <Col md={9}>
                  <Control.text
                    model=".imageup"
                    id="imageup"
                    name="imageup"
                    value="/assets/images/alberto.png"
                    className="form-control"
                  />
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="Submit" md={3}></Label>
                <Col md={9}>
                  <Control.input
                    type="Submit"
                    model=".Submit"
                    id="Submit"
                    name="Submit"
                    value="Submit"
                    className="form-control"
                  />
                </Col>
              </Row>
            </LocalForm>
          );
        });
      return <div>{ati}</div>;
    };
    const FooBar = ({ value }) => (
      <Button onClick={this.handleClick(value)} color="primary">
        DELETE
      </Button>
    );

    function RenderMenuItem({ nvien }) {
      return (
        <div>
          <CardImg src={nvien.image} alt={nvien.name} /> <p>{nvien.name}</p>
          <Link to={`/them/${nvien.id}`}>
            <Button className="btn-ca" color="primary">
              UPDATE
            </Button>
          </Link>
          <FooBar value={nvien.id} />
        </div>
      );
    }
    const tendepartment = (id) => {
      var kq = this.props.department.filter((n) => n.id === id)[0];

      if (typeof kq !== "undefined") {
        return kq.name;
      } else {
        kq = "";
      }
    };

    const Dsnv = () => {
      if (this.props.nvLoading) {
        return <Loading />;
      } else if (this.props.nverrMess) {
        return <div className="mess">{this.props.nverrMess}</div>;
      } else {
        const dsnv = this.props.nvien.map((n) => {
          return (
            <div className="chiacot" key={n.id}>
              <RenderMenuItem nvien={n} />
            </div>
          );
        });
        return (
          <div className="container">
            <div className="row">
              <div className="col-8"> {dsnv}</div>

              <div className="col-4">
                {" "}
                <Switch>
                  {" "}
                  <Route path="/them/:idsua" component={Updatestore}></Route>
                </Switch>
              </div>
            </div>
          </div>
        );
      }
    };

    const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !val || val.length <= len;
    const minLength = (len) => (val) => val && val.length >= len;
    const isNumber = (val) => !isNaN(Number(val));
    return (
      <div className="row row-content ">
        <div className="row">
          <Col md={4}>
            <Button
              type="submit"
              value="submit"
              color="primary"
              onClick={this.toggleModal}
            >
              Thêm nhân viên
            </Button>{" "}
          </Col>{" "}
          <Col md={8}>
            <Button
              className="btn-rig"
              type="submit"
              value="submit"
              color="primary"
            >
              Thông tin nhân viên update
            </Button>{" "}
          </Col>
        </div>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>ADD STAFFS</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="name" md={3}>
                  First Name
                </Label>
                <Col md={9}>
                  <Control.text
                    model=".name"
                    id="name"
                    name="name"
                    placeholder="name Name"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".name"
                    show="touched"
                    messages={{
                      required: "Required",
                      minLength: "Must be greater than 3 characters",
                      maxLength: "Must be 15 characters or less",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="doB" md={3}>
                  doB
                </Label>
                <Col md={9}>
                  <Control.input
                    type="date"
                    model=".doB"
                    id="doB"
                    name="doB"
                    placeholder="doB "
                    className="form-control"
                    validators={{
                      required,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".doB"
                    show="touched"
                    messages={{
                      required: "yêu cầu nhập",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="salaryScale" md={3}>
                  salaryScale
                </Label>
                <Col md={9}>
                  <Control.select
                    model=".salaryScale"
                    id="salaryScale"
                    name="salaryScale"
                    placeholder="salaryScale "
                    className="form-control"
                    validators={{
                      required,
                    }}
                  >
                    <option value="">Chọn salaryScale</option>
                    <option value="1">1</option>
                    <option value="1.1">1.1</option>
                    <option value="1.2">1.2</option>
                    <option value="1.3">1.3</option>
                    <option value="1.4">1.4</option>
                    <option value="1.5">1.5</option>
                    <option value="1.6">1.6</option>
                    <option value="1.7">1.7</option>
                    <option value="1.8">1.8</option>
                    <option value="1.9">1.9</option>
                    <option value="2.0">2</option>
                  </Control.select>
                  <Errors
                    className="text-danger"
                    model=".salaryScale"
                    show="touched"
                    messages={{
                      required: "yêu cầu nhập",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="startDate" md={3}>
                  startDate
                </Label>
                <Col md={9}>
                  <Control.text
                    type="number"
                    min="1"
                    max="31"
                    model=".startDate"
                    id="startDate"
                    name="startDate"
                    placeholder="startDate "
                    className="form-control"
                    validators={{ required, isNumber }}
                  />
                  <Errors
                    className="text-danger"
                    model=".startDate"
                    show="touched"
                    messages={{
                      required: "Required",
                      isNumber: "Must be a number",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="department" md={3}>
                  department
                </Label>
                <Col md={9}>
                  <Control.select
                    model=".department"
                    id="department"
                    name="department"
                    placeholder="department "
                    className="form-control"
                    validators={{ required }}
                  >
                    {" "}
                    <option value="">Chọn department</option>
                    <option value="Sale">Sale</option>
                    <option value="HR">HR</option>
                    <option value="Marketing">Marketing</option>
                    <option value="IT">IT</option>
                    <option value="Finance">Finance</option>
                  </Control.select>
                  <Errors
                    className="text-danger"
                    model=".department"
                    show="touched"
                    messages={{
                      required: "yêu cầu nhập",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="annualLeave" md={3}>
                  annualLeave
                </Label>
                <Col md={9}>
                  <Control.text
                    type="number"
                    min="1"
                    max="9"
                    model=".annualLeave"
                    id="annualLeave"
                    name="annualLeave"
                    placeholder="annualLeave "
                    className="form-control"
                    validators={{
                      isNumber,
                      required,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".annualLeave"
                    show="touched"
                    messages={{
                      required: "Required",
                      isNumber: "Must be a number",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="overTime" md={3}>
                  overTime
                </Label>
                <Col md={9}>
                  <Control.text
                    min="1"
                    max="31"
                    type="number"
                    model=".overTime"
                    id="overTime"
                    name="overTime"
                    placeholder="overTime "
                    className="form-control"
                    validators={{
                      isNumber,
                      required,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".overTime"
                    show="touched"
                    messages={{
                      required: "Required",
                      isNumber: "Must be a number",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="image" md={3}>
                  image
                </Label>
                <Col md={9}>
                  <Control.text
                    model=".image"
                    id="image"
                    name="image"
                    placeholder="image "
                    value="/assets/images/alberto.png"
                    className="form-control"
                  />
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="Submit" md={3}></Label>
                <Col md={9}>
                  <Control.input
                    type="Submit"
                    model=".Submit"
                    id="Submit"
                    name="Submit"
                    value="Submit"
                    className="form-control"
                  />
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
        <br></br>
        <br></br>
        <Dsnv />
      </div>
    );
  }
}
export default ThemNhanvien;
