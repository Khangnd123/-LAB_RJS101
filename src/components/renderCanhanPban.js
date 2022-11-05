import React from "react";
import { Card, CardImg } from "reactstrap";
import { Loading } from "./LoadingComponent";

function RenderPhongbanItemCaNhan(props) {
  if (props.nvLoading) {
    <Loading></Loading>;
  } else if (props.nverrMess) {
    return <div>{props.nverrMess}</div>;
  } else {
    console.log("DSAdsad");
    const mm = props.av.map((t) => {
      return (
        <div className="col-md-4 col-sm-6 col-12 " key={t.id}>
          <Card key={t.id}>
            <CardImg src={t.image} alt={t.image} />
            <p>{t.name}</p>
          </Card>
        </div>
      );
    });
    return <div className="row">{mm}</div>;
  }
}
export default RenderPhongbanItemCaNhan;
