import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import RenderPhongbanItemCaNhan from "./renderCanhanPban";
import Menu from "./menu";
import Ndetail from "./ChitietNV";
import Nhanvien from "./nhanvien";
import Pban from "./Phongban";
import Bangluong from "./Bangluong";
import Timkiem from "./Timkiem";
//import { Breadcrumb, BreadcrumbItem } from "reactstrap";

import { Switch, Route, Redirect } from "react-router-dom";
import ThemNhanvien from "./ThemNhanvien";
import { connect } from "react-redux";
import {
  fetchNv,
  fetchDpartment,
  fetchLuong,
  postNhanvien,
  xoa,
  fetchDpartmentid,
  PatchNhanvien,
} from "../redux/ActionCreators";
import { withRouter } from "react-router";
var a = "Dept01";
const mapStateToProps = (state) => {
  //console.log(state.nvien);

  return {
    nvien: state.nvien,
    pban: state.pban,
    pbanid: state.pbanid,
    luong: state.luong,
  };
};
const mapDispatchToProps = (dispatch) => ({
  // addComment: (cm) => dispatch(addComment(cm)),
  fetchNv: () => {
    dispatch(fetchNv());
  },
  fetchDpartment: () => {
    dispatch(fetchDpartment());
  },
  fetchDpartmentid: (id) => {
    dispatch(fetchDpartmentid(id));
  },
  xoa: (ad) => {
    dispatch(xoa(ad));
  },
  fetchLuong: () => {
    dispatch(fetchLuong());
  },

  postNhanvien: (
    id,
    name,
    doB,
    salaryScale,
    startDate,
    departmentId,
    annualLeave,
    overTime,
    image,
    salary
  ) =>
    dispatch(
      postNhanvien(
        id,
        name,
        doB,
        salaryScale,
        startDate,
        departmentId,
        annualLeave,
        overTime,
        image,
        salary
      )
    ),
  PatchNhanvien: (
    dsnvien,
    id,
    name,
    doB,
    salaryScale,
    startDate,
    departmentId,
    annualLeave,
    overTime,
    image,
    salary
  ) =>
    dispatch(
      PatchNhanvien(
        dsnvien,
        id,
        name,
        doB,
        salaryScale,
        startDate,
        departmentId,
        annualLeave,
        overTime,
        image,
        salary
      )
    ),
});

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      value: "111111111111",
      valueOp: "",
      valueBl: "",
    };
    this.handleChangeBluong = this.handleChangeBluong.bind(this);
  }

  componentDidMount() {
    this.props.fetchNv();
    this.props.fetchDpartment();
    this.props.fetchLuong();
  }

  handleChangeBluong() {
    this.setState({ valueBl: document.getElementById("tlv").value });
  }

  render() {
    const HomePageNV = () => {
      return (
        <div>
          <Nhanvien />;
        </div>
      );
    };
    const canhan = () => {
      // this.props.fetchDpartmentid(match.params.pbid);
      return (
        <RenderPhongbanItemCaNhan
          av={this.props.pbanid.pbanid}
          nvLoading={this.props.pbanid.isLoading}
          nverrMess={this.props.pbanid.errMess}
        />
      );
    };
    const NvienWithId = ({ match }) => {
      return (
        <Ndetail
          value={this.state.value}
          Mvien={
            this.props.nvien.nvien.filter(
              (nien) => nien.id === parseInt(match.params.nvId, 10)
            )[0]
          }
          isLoading={this.props.nvien.isLoading}
          errMess={this.props.nvien.errMess}
          department={this.props.pban.pban}
        />
      );
    };

    return (
      <div>
        <Header />

        <Switch>
          <Route path="/home" component={HomePageNV}></Route>
          <Route
            path="/them"
            component={() => (
              <ThemNhanvien
                nvien={this.props.nvien.nvien}
                postNhanvien={this.props.postNhanvien}
                xoa={this.props.xoa}
                nvLoading={this.props.nvien.isLoading}
                nverrMess={this.props.nvien.errMess}
                department={this.props.pban.pban}
                PatchNhanvien={this.props.PatchNhanvien}
              />
            )}
          ></Route>
          <Route
            exact
            path="/menu"
            component={() => (
              <Menu
                nvLoading={this.props.nvien.isLoading}
                nverrMess={this.props.nvien.errMess}
                nvien={this.props.nvien.nvien}
                department={this.props.pban.pban}
              />
            )}
          />
          <Route path="/menu/:nvId" component={NvienWithId}></Route>
          <Route
            path="/phongban"
            component={() => (
              <Pban
                fetchDpartmentid={this.props.fetchDpartmentid}
                pban={this.props.pban.pban}
                nvien={this.props.nvien.nvien}
                nvLoading={this.props.pban.isLoading}
                nverrMess={this.props.pban.errMess}
              />
            )}
          ></Route>

          <Route
            path="/bangluong"
            component={() => (
              <Bangluong
                nvien={this.props.luong.luong}
                valueBl={this.state.valueBl}
                handleChangeBluong={this.handleChangeBluong}
              />
            )}
          ></Route>
          <Route
            path="/timkiem"
            component={() => <Timkiem nvien={this.props.nvien.nvien} />}
          ></Route>
          <Route path="/pbb/:pbid" component={canhan}></Route>

          <Redirect to="/home" />
        </Switch>

        <Footer />
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
