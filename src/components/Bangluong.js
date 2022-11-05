import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  CardText,
} from "reactstrap";
import { Link } from "react-router-dom";
function RenderBangluongItem({ nvien }) {
  return (
    <Card>
      <CardTitle id="tenho1">{nvien.name}</CardTitle>
      <CardBody>
        <CardText>Mã nhân viên : {nvien.id} </CardText>
        <CardText> Hệ số lương : {parseFloat(nvien.salaryScale)}</CardText>
        <CardText> Số ngày đã làm thêm : {nvien.overTime}</CardText>
        <CardText id="luong"> Lương : {nvien.salary}</CardText>
      </CardBody>
    </Card>
  );
}
function XepTheo(props) {
  if (props.valueBl === "") {
    return <div>Không có giá trị sắp xếp</div>;
  } else if (props.valueBl === "id") {
    return <div>Mã nhân viên</div>;
  } else if (props.valueBl === "salaryScale") {
    return <div>SalaryScale</div>;
  } else if (props.valueBl === "luong") {
    return <div>Luong</div>;
  } else {
    return <div>Không xác định</div>;
  }
}
const Bangluong = (props) => {
  var ac;
  console.log(props.valueBl);
  if (props.valueBl === "id") {
    ac = props.nvien.sort((a, b) => b.id - a.id);
  } else if (props.valueBl === "salaryScale") {
    ac = props.nvien.sort((a, b) => b.salaryScale - a.salaryScale);
  } else if (props.valueBl === "luong") {
    ac = props.nvien.sort((a, b) => b.salary - a.salary);
  } else if (props.valueBl === "") {
    ac = props.nvien.sort((a, b) => a.id - b.id);
  }
  const bangluong = ac.map((nvien) => {
    return (
      <div className="col-md-4 col-sm-6 col-12 " key={nvien.id}>
        <RenderBangluongItem nvien={nvien} />
        <br></br>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>

          <BreadcrumbItem active>Bảng lương</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Bảng lương </h3>
          <hr></hr>
          <label>
            <select id="tlv">
              <option value="">Sắp xếp theo</option>
              <option value="id">mã nhân viên</option>
              <option value="salaryScale">annualLeave</option>
              <option value="luong">Luong</option>
            </select>
          </label>

          <XepTheo valueBl={props.valueBl} />
          <label>
            <input
              type="button"
              value="Submit"
              onClick={props.handleChangeBluong}
            />
          </label>
          <hr></hr>
        </div>
      </div>
      <div className="row">{bangluong}</div>
    </div>
  );
};

export default Bangluong;
