import React, { Component } from "react";
import dateFormat from "dateformat";
import {
  Card,
  CardImg,
  CardBody,
  CardText,
  Form,
  FormGroup,
  Col,
  Label,
  Input,
  FormFeedback,
} from "reactstrap";

class Timkiem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      touched: {
        fname: false,
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.hanledBlur = this.hanledBlur.bind(this);
    // this.FindNhanvien = this.FindNhanvien.bind(this);
  }

  hanledBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state, [field]: true },
    });
  };
  validate(fname) {
    const errors = {
      fname: "",
    };
    if (this.state.touched.fname && fname.length < 1) {
      errors.fname = "chua co tu khoa";
    } else if (this.state.touched.fname && fname.length >= 10)
      errors.fname = "tu khoa qua lon";
    return errors;
  }
  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }
  handleSubmit(event) {
    //console.log("curent state is" + JSON.stringify(this.state));
    alert("curent state is" + JSON.stringify(this.state.fname));
    event.preventDefault();
  }
  FindNhanvien() {
    if (this.state.fname !== "") {
      let a = this.props.nvien.filter(
        (nvien) =>
          nvien.name.toLowerCase().indexOf(this.state.fname.toLowerCase()) !==
          -1
      );
      const mm = a.map((Tvien) => {
        return (
          <div className="col-md-4 col-sm-6 col-12 " key={Tvien.id}>
            <Card>
              <CardImg top src={Tvien.image} />
              <CardBody>
                <CardText id="tenho1"> Họ và tên : {Tvien.name}</CardText>
                <CardText>
                  Ngày vào công ty : {dateFormat(Tvien.doB, "dd/mm/yyyy")}
                </CardText>
                <CardText>Phòng ban : {Tvien.departmentId}</CardText>
                <CardText>Số ngày nghỉ còn lại : {Tvien.annualLeave}</CardText>
                <CardText> Số ngày đã làm thêm : {Tvien.overTime}</CardText>
              </CardBody>
            </Card>
          </div>
        );
      });
      return <div className="row">{mm}</div>;
    }
  }
  render() {
    const errors = this.validate(this.state.fname);

    return (
      <div className="row row-content">
        <div className="col-12">
          <Form onSubmit={this.handleSubmit}>
            <FormGroup row>
              <Label htmlFor="fname" md={2}>
                Từ khóa
              </Label>
              <Col md={10}>
                <Input
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="tu khoa"
                  value={this.state.fname}
                  valid={errors.fname === ""}
                  invalid={errors.fname !== ""}
                  onBlur={this.hanledBlur("fname")}
                  onChange={this.handleChange}
                ></Input>
                <FormFeedback>{errors.fname}</FormFeedback>
              </Col>
            </FormGroup>
          </Form>
          {this.FindNhanvien()}
        </div>
      </div>
    );
  }
}
export default Timkiem;
