import React from "react";
import { Card, CardImg, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";
function RenderMenuItem({ nvien, nvLoading, nverrMess }) {
  if (nvLoading) {
    return <Loading />;
  } else if (nverrMess) {
    return <div className="mess">{nverrMess}</div>;
  } else {
    return (
      <Card>
        <Link to={`/menu/${nvien.id}`}>
          <CardImg src={nvien.image} alt={nvien.name} />
          <p>{nvien.name}</p>
        </Link>
      </Card>
    );
  }
}

const Menu = (props) => {
  if (props.nvLoading) {
    return <Loading />;
  } else if (props.nverrMess) {
    return <div className="mess">{props.nverrMess}</div>;
  } else {
    const menu = props.nvien.map((n) => {
      return (
        <div className="col-md-2 col-sm-4 col-6 " key={n.id}>
          <RenderMenuItem
            nvien={n}
            nvLoading={props.nvLoading}
            nverrMess={props.nverrMess}
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

            <BreadcrumbItem active>Menu</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Menu </h3>
            <hr></hr>
          </div>
        </div>
        <div className="row">{menu}</div>
      </div>
    );
  }
};

export default Menu;
