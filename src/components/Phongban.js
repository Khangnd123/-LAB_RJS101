import React from "react";
import {
  Card,
  Breadcrumb,
  BreadcrumbItem,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import { Loading } from "./LoadingComponent";
import { Link } from "react-router-dom";

const Pban = (props) => {
  //console.log(props.pban);
  function RenderPhongbanItem({ pb }) {
    function onPbanid() {
      console.log(pb.id);
      props.fetchDpartmentid(pb.id);
    }

    return (
      <Card onClick={onPbanid}>
        <Link to={`/pbb/${pb.id}`}>
          <CardBody>
            <CardTitle id="tenho">{pb.name}</CardTitle>
            <CardText>{pb.numberOfStaff}</CardText>
          </CardBody>
        </Link>
      </Card>
    );
  }

  if (props.nvLoading) {
    return <Loading></Loading>;
  } else if (props.nverrMess) {
    return <div>{props.nverrMess}</div>;
  } else {
    const phongban = props.pban.map((pb) => {
      return (
        <div className="col-md-4 col-sm-6 col-12" key={pb.id}>
          <RenderPhongbanItem
            isLoading={props.nvLoading}
            errMess={props.nverrMess}
            pb={pb}
          />
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

            <BreadcrumbItem active>Phòng ban</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Phòng ban </h3>
            <hr></hr>
          </div>
        </div>
        <div className="row">{phongban}</div>
      </div>
    );
  }
};

export default Pban;
