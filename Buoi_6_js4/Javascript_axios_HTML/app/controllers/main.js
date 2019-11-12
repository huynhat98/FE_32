var nguoiDungService = new NguoiDungService();
var validation = new Validation();

getListUser();

getEle("btnThemNguoiDung").addEventListener("click", function() {
  var title = "Thêm người dùng";
  var footer = `
        <button id="btn-them" class="btn btn-success" onclick ="themNguoiDung()">Thêm</button>
        <button id="btnDong" type="button" class="btn btn-danger" data-dismiss="modal">Đóng</button>
    `;
  document.getElementsByClassName("modal-title")[0].innerHTML = title;
  document.getElementsByClassName("modal-footer")[0].innerHTML = footer;
  getEle("TaiKhoan").removeAttribute("disabled");
  getEle("TaiKhoan").value = "";
  getEle("MatKhau").value = "";
  getEle("HoTen").value = "";
  getEle("Email").value = "";
  getEle("SoDienThoai").value = "";
  getEle("loaiNguoiDung").value = getEle("loaiNguoiDung")[0].value;

  getEle("tbTaiKhoan").style.display = "none";
  getEle("tbHoTen").style.display = "none";
  getEle("tbMatKhau").style.display = "none";
  getEle("tbEmail").style.display = "none";
  getEle("tbSDT").style.display = "none";
  getEle("tbLoaiND").style.display = "none";

  getEle("tbSuccess").style.display = "none";
});

// Them nguoi dung
function themNguoiDung() {
  var taiKhoan = getEle("TaiKhoan").value;
  var matKhau = getEle("MatKhau").value;
  var hoTen = getEle("HoTen").value;
  var email = getEle("Email").value;
  var soDT = getEle("SoDienThoai").value;
  var loaiNguoiDung = getEle("loaiNguoiDung").value;

  var isValid = validateSub(
    taiKhoan,
    hoTen,
    matKhau,
    email,
    soDT,
    loaiNguoiDung
  );

  if (isValid) {
    var nguoiDung = new NguoiDung(
      taiKhoan,
      matKhau,
      hoTen,
      email,
      soDT,
      loaiNguoiDung
    );

    nguoiDungService
      .themNguoiDung(nguoiDung)
      .then(function(result) {
        // location.reload();
        getListUser();
        console.log(result);
        getEle("tbSuccess").style.display = "block";
        getEle("tbSuccess").innerHTML = "Thêm Thành Công!";
      })
      .catch(function(error) {
        console.log(error);
        getEle("tbSuccess").style.display = "block";
        getEle("tbSuccess").innerHTML = "Hệ Thống Lỗi";
      });
  } else {
    getEle("tbSuccess").style.display = "none";
    getEle("tbSuccess").innerHTML = "";
  }
}

// Chuc nang xoa
function xoa(id) {
  nguoiDungService
    .xoaNguoiDung(id)
    .then(function(result) {
      console.log(result);
      getListUser();
      alert("Xóa thàng công!");
    })
    .catch(function(error) {
      console.log(error);
      alert("Hệ Thống Lỗi!");
      if (error.response.status === 404) {
        alert("Ma nguoi dung sai roi");
        // nen dung switch case neu bat nhieu loi
        /**
         * swich (error.response.status){
         *    case 404: do
         *            break;
         *    case 405:.....
         * }
         */
      }
    });
}

//chuc nang sua
function sua(id) {
  getEle("tbTaiKhoan").style.display = "none";
  getEle("tbHoTen").style.display = "none";
  getEle("tbMatKhau").style.display = "none";
  getEle("tbEmail").style.display = "none";
  getEle("tbSDT").style.display = "none";
  getEle("tbLoaiND").style.display = "none";

  getEle("tbSuccess").style.display = "none";

  var title = "Sửa người dùng";
  document.getElementsByClassName("modal-title")[0].innerHTML = title;
  var footer = `
      <button class = "btn btn-success" onclick = 'capNhat(${id})' >Cập nhật</button>
      <button id="btnDong" type="button" class="btn btn-danger" data-dismiss="modal">Đóng</button>
  `;
  document.getElementsByClassName("modal-footer")[0].innerHTML = footer;

  nguoiDungService
    .layThongTinNguoiDung(id)
    .then(function(result) {
      console.log(result);
      getEle("TaiKhoan").setAttribute("disabled", true);
      getEle("TaiKhoan").value = result.data.taiKhoan;
      getEle("MatKhau").value = result.data.matKhau;
      getEle("HoTen").value = result.data.hoTen;
      getEle("Email").value = result.data.email;
      getEle("SoDienThoai").value = result.data.soDT;
      getEle("loaiNguoiDung").value = result.data.maLoaiNguoiDung;
    })
    .catch(function(error) {
      console.log(error);
    });
}

function capNhat(id) {
  var taiKhoan = getEle("TaiKhoan").value;
  var matKhau = getEle("MatKhau").value;
  var hoTen = getEle("HoTen").value;
  var email = getEle("Email").value;
  var soDT = getEle("SoDienThoai").value;
  var loaiNguoiDung = getEle("loaiNguoiDung").value;

  var isValid = validateSub(null, hoTen, matKhau, email, soDT);

  if (isValid) {
    var nguoiDung = new NguoiDung(
      taiKhoan,
      matKhau,
      hoTen,
      email,
      soDT,
      loaiNguoiDung
    );

    nguoiDungService
      .capNhatNguoiDung(id, nguoiDung)
      .then(function(result) {
        console.log(result);
        getListUser();
        getEle("tbSuccess").style.display = "block";
        getEle("tbSuccess").innerHTML = "Cập Nhật Thành Công!";
      })
      .catch(function(error) {
        console.log(error);
        getEle("tbSuccess").style.display = "block";
        getEle("tbSuccess").innerHTML = "Hệ Thống Lỗi";
      });
  } else {
    getEle("tbSuccess").style.display = "none";
    getEle("tbSuccess").innerHTML = "";
  }
}

// Chức năng tìm kiếm
getEle("txtSearch").addEventListener("keyup", function() {
  var chuoiTimKiem = getEle("txtSearch").value;
  var mangNguoiDung = getLocalStorage();

  var mangTimKiem = nguoiDungService.timKiemNguoiDung(
    chuoiTimKiem,
    mangNguoiDung
  );

  renderTable(mangTimKiem);
});

function renderTable(mangNguoiDung) {
  var tbody = getEle("tblDanhSachNguoiDung");
  var contentHTML = "";
  mangNguoiDung.map(function(item, index) {
    contentHTML += `
            <tr>
                <td>${(index += 1)}</td>
                <td>${item.taiKhoan}</td>
                <td>${item.matKhau}</td>
                <td>${item.hoTen}</td>
                <td>${item.email}</td>
                <td>${item.soDT}</td>
                <td>${item.maLoaiNguoiDung}</td>
                <td>
                  <button class= "btn btn-info" data-toggle="modal" data-target="#myModal" onclick = 'sua(${
                    item.id
                  })'>Sửa</button>
                  <button class= "btn btn-danger"  onclick = 'xoa(${
                    item.id
                  })'>Xóa</button>
                </td>
            </tr>
        `;
  });
  tbody.innerHTML = contentHTML;
}

function getListUser() {
  nguoiDungService
    .layDanhSachNguoiDung()
    // tra ve loi hua giong try catch. neu chay vo then thi tra ve danh sach
    .then(function(result) {
      setLocalStorage(result.data);
      renderTable(result.data);
    })
    // chay vao catch la khong lay dc va bao loi
    .catch(function(error) {
      console.log(error);
    });
}

//Luu mang nguoi dung xuong localStorage
function setLocalStorage(mangNguoiDung) {
  localStorage.setItem("DanhSachNguoiDung", JSON.stringify(mangNguoiDung));
}

//lay mang nguoi dung
function getLocalStorage() {
  if (localStorage.getItem("DanhSachNguoiDung")) {
    return JSON.parse(localStorage.getItem("DanhSachNguoiDung"));
  }
}

function getEle(id) {
  return document.getElementById(id);
}

function validateSub(taiKhoan, hoTen, matKhau, email, soDT, loaiNguoiDung) {
  var mangNguoiDung = getLocalStorage();
  var isValid = true;

  /*Tai khoan */
  isValid &=
    validation.kiemTraRong(
      taiKhoan,
      "tbTaiKhoan",
      "(*) tài khoản người dùng không được để trống!"
    ) &&
    validation.kiemTraTrung(
      taiKhoan,
      "tbTaiKhoan",
      "Tài khoảng đã tồn tại!",
      mangNguoiDung
    );

  /*Ho Ten */
  isValid &=
    validation.kiemTraRong(
      hoTen,
      "tbHoTen",
      "(*) Họ tên người dùng không được để trống!"
    ) &&
    validation.kiemTraChuoi(
      hoTen,
      "tbHoTen",
      "Họ tên chứa ký tự không hợp lệ!"
    );

  /*Mat Khau */
  isValid &=
    validation.kiemTraRong(
      matKhau,
      "tbMatKhau",
      "(*) Mật khẩu không được để trống!"
    ) &&
    validation.kiemTraDoDai(
      matKhau,
      "tbMatKhau",
      "Mật khau phải từ 6 đến 12 ký tự!",
      6,
      12
    );

  /*Email */
  isValid &=
    validation.kiemTraRong(
      email,
      "tbEmail",
      "(*) Email không được để trống!"
    ) &&
    validation.kiemTraEmail(email, "tbEmail", "Email chứa ký tự không hợp lệ!");

  /* So dien thoai*/
  isValid &=
    validation.kiemTraRong(
      soDT,
      "tbSDT",
      "(*) Số điện thoại không được để trống!"
    ) && validation.kiemTraSDT(soDT, "tbSDT", "Số điện thoại không hợp lệ!");

  /* Loai nguoi dung */
  isValid &= validation.kiemTraRong(
    loaiNguoiDung,
    "tbLoaiND",
    "(*) Loại người dùng không được để trống!"
  );
  return isValid;
}
