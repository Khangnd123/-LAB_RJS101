import * as ActionTypes from "./ActionTypes";
import { baseUrl, baseUrl_pb, baseUrl_sy } from "../shared/baseUrl";

export const xoa = (ad) => (dispatch) => {
  return fetch(`https://rjs101xbackend.herokuapp.com/staffs/${ad}`, {
    method: "DELETE",
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        throw error;
      }
    )
    .then((response) => response.json())
    .then((response) => {
      dispatch(addNV(response));
      alert("Xóa thành công ");
    })
    .catch((error) => {
      console.log("post comments", error.message);
      alert(
        "zzzzzzzzzzYour comment could not be posted\nError: " + error.message
      );
    });
};

export const PatchNhanvien =
  (
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
  (dispatch) => {
    const newNhanvien = {
      id: id,
      name: name,
      doB: doB,
      salaryScale: salaryScale,
      startDate: startDate,
      departmentId: departmentId,
      annualLeave: annualLeave,
      overTime: overTime,
      image: image,
      salary: salary,
    };
    console.log(newNhanvien);
    let a = dsnvien.findIndex((item) => {
      return item.id === newNhanvien.id;
    });
    dsnvien[a] = {
      id: parseInt(id),
      name: name,
      doB: doB,
      salaryScale: parseInt(salaryScale),
      startDate: startDate,
      departmentId: departmentId,
      annualLeave: parseInt(annualLeave),
      overTime: parseInt(overTime),
      image: image,
      salary: parseInt(salary),
    };
    console.log(a);
    console.log(dsnvien);
    return fetch(baseUrl, {
      method: "PATCH",
      body: JSON.stringify(dsnvien[a]),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(
        (response) => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error(
              "Error " + response.status + ": " + response.statusText
            );
            error.response = response;
            throw error;
          }
        },
        (error) => {
          throw error;
        }
      )
      .then((response) => response.json())
      .then((response) => {
        dispatch(addNV(response));
        alert("cập nhật thành công");
      })
      .catch((error) => {
        console.log("post comments", error.message);
        alert("Your comment could not be posted\nError: " + error.message);
      });
  };
export const postNhanvien =
  (
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
  (dispatch) => {
    var newNhanvien = {
      id: id,
      name: name,
      doB: doB,
      salaryScale: salaryScale,
      startDate: startDate,
      departmentId: departmentId,
      annualLeave: annualLeave,
      overTime: overTime,
      image: image,
      salary: salary,
    };

    return fetch(baseUrl, {
      method: "POST",
      body: JSON.stringify(newNhanvien),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
    })
      .then(
        (response) => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error(
              "Error " + response.status + ": " + response.statusText
            );
            error.response = response;
            throw error;
          }
        },
        (error) => {
          throw error;
        }
      )
      .then((response) => response.json())
      .then((response) => {
        dispatch(addNV(response));
        alert("them nhan vien thanh cong: ");
      })
      .catch((error) => {
        console.log("post comments", error.message);
        alert("Your comment could not be posted\nError: " + error.message);
      });
  };

//________________________________________________________
//________________________________________________________

export const fetchNv = () => (dispatch) => {
  dispatch(nvloading(true));
  return fetch(baseUrl)
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((nvien) => dispatch(addNV(nvien)))
    .catch((error) => dispatch(nvfailed(error.message)));
};

export const fetchDpartment = () => (dispatch) => {
  dispatch(pbloading(true));
  return fetch(baseUrl_pb, { method: "get" })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((pban) => dispatch(addPB(pban)))
    .catch((error) => dispatch(pbfailed(error.message)));
};
export const fetchDpartmentid = (id) => (dispatch) => {
  dispatch(pbloading(true));

  return fetch(`https://rjs101xbackend.herokuapp.com/departments/${id}`)
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((ppid) => dispatch(addpbid(ppid)))
    .catch((error) => dispatch(pbidfailed(error.message)));
};
export const fetchLuong = () => (dispatch) => {
  dispatch(luongloading(true));
  return fetch(baseUrl_sy)
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((luong) => dispatch(addluong(luong)))
    .catch((error) => dispatch(luongfailed(error.message)));
};
//________________________________________________________
//________________________________________________________
export const nvloading = () => ({
  type: ActionTypes.NV_LOADING,
});
export const nvfailed = (errmess) => ({
  type: ActionTypes.NV_FAILED,
  payload: errmess,
});
export const addNV = (nvien) => ({
  type: ActionTypes.ADD_NV,
  payload: nvien,
});

export const addNVPatch = (nvien) => ({
  type: ActionTypes.ADD_NV,
  payload: nvien,
});
//________________________________________________________
//________________________________________________________
export const addPB = (pbann) => ({
  type: ActionTypes.ADD_PB,
  payload: pbann,
});

export const pbloading = () => ({
  type: ActionTypes.PB_LOADING,
});

export const pbfailed = (errmess) => ({
  type: ActionTypes.PB_FAILED,
  payload: errmess,
});

//________________________________________________________
//________________________________________________________
export const addpbid = (pbanid) => ({
  type: ActionTypes.ADD_PBID,
  payload: pbanid,
});
export const pbloadingid = () => ({
  type: ActionTypes.PBID_LOADING,
});
export const pbidfailed = (errmess) => ({
  type: ActionTypes.PBID_FAILED,
  payload: errmess,
});
//________________________________________________________
//________________________________________________________
export const addluong = (pbann) => ({
  type: ActionTypes.ADD_LUONG,
  payload: pbann,
});
export const luongloading = () => ({
  type: ActionTypes.LUONG_LOADING,
});
export const luongfailed = (errmess) => ({
  type: ActionTypes.LUONG_FAILED,
  payload: errmess,
});
