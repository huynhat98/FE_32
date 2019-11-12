var danhSachNhanVien = new DanhSachNhanVien();
var validation = new Validation();

getLocalStorage();

getEle("btnThem").addEventListener("click", function() {
  getEle("btnCapNhat").style.display = "none";
  getEle("btnThemNV").style.display = "block";
  getEle("msnv").removeAttribute("disabled");
});

getEle("btnThemNV").addEventListener("click", function() {
  var maNV = getEle("msnv").value;
  var hoTen = getEle("name").value;
  var email = getEle("email").value;
  var password = getEle("password").value;
  var date = getEle("datepicker").value;
  var chucVu = getEle("chucvu").value;

  var isValid = true;

  /* MaNV */
  isValid &= validation.kiemTraRong(maNV, "tbMaNV", "(*) MaNV không được rỗng") &&
  validation.kiemTraTrungMaNV(maNV,"tbMaNV","(*)Ma nhan vien không được trùng",danhSachNhanVien.mangNhanVien);

  /* HoTen */
  isValid &=
    validation.kiemTraRong(hoTen, "tbTen", "(*) Họ tên không được rỗng") &&
    validation.kiemTraChuoi(hoTen, "tbTen", "(*) Vui lòng nhập vào chuỗi!");

  /* Email */
  isValid &=
    validation.kiemTraRong(email, "tbEmail", "(*) Email không được rỗng") &&
    validation.checkEmail(email, "tbEmail", "(*) Email không đúng định dạng");

  /* Password */
  isValid &=
    validation.kiemTraRong(
      password,
      "tbMatKhau",
      "(*) Password không được rỗng"
    ) &&
    validation.kiemTraDoDaiKyTu(
      password,
      "tbMatKhau",
      "(*) Ky tu 6 - 12",
      6,
      12
    );

  /* Chuc Vu */
  isValid &= validation.kiemTraChucVu(
    "chucvu",
    "tbChucVu",
    "(*) Vui lòng chọn chức vụ"
  );



  if (isValid) {
    var nhanVien = new NhanVien(maNV, hoTen, email, password, date, chucVu);
    danhSachNhanVien.themNhanVien(nhanVien);
    taoBang();
    setLocalStorage();
  }
});


function taoBang(mang = danhSachNhanVien.mangNhanVien) {
  //-------------- String Template
  /**
  var name2 = "cybersoft";
  var result2 = `Hello ${name2}` // => Hello cybersoft
    */

  var tbody = getEle("tableDanhSach");
  var content = "";
  mang.map(function(item, index) {
    content += `
        <tr>
            <td>${item.maNV}</td>
            <td>${item.hoTen}</td>
            <td>${item.email}</td>
            <td>${item.date}</td>
            <td>${item.chucVu}</td>
            <td>
              <button class= "btn btn-success"  data-toggle="modal" data-target="#myModal" onclick = "suaNhanVien('${item.maNV}')">Sửa</button>
              <button class= "btn btn-danger" onclick="xoa('${item.maNV}')">Xóa</button>
            </td>
        </tr>
      `;
  });
  tbody.innerHTML = content;
}

//Tim kiem
getEle("searchName").addEventListener("keyup",function(){
  var chuoiTimKiem = getEle("searchName").value;
  var mangTimKiem = danhSachNhanVien.timNhanVien(chuoiTimKiem);
  taoBang(mangTimKiem);
})

//Xoa Nhan Vien
function xoa(maNV){
  danhSachNhanVien.xoaNhanVien(maNV);
  taoBang();
  setLocalStorage();
}

getEle("btnCapNhat").addEventListener("click",function(){
  var maNV = getEle("msnv").value;
  var hoTen = getEle("name").value;
  var email = getEle("email").value;
  var password = getEle("password").value;
  var date = getEle("datepicker").value;
  var chucVu = getEle("chucvu").value;

  var isValid = true;

  /* HoTen */
  isValid &=
    validation.kiemTraRong(hoTen, "tbTen", "(*) Họ tên không được rỗng") &&
    validation.kiemTraChuoi(hoTen, "tbTen", "(*) Vui lòng nhập vào chuỗi!");

  /* Email */
  isValid &=
    validation.kiemTraRong(email, "tbEmail", "(*) Email không được rỗng") &&
    validation.checkEmail(email, "tbEmail", "(*) Email không đúng định dạng");

  /* Password */
  isValid &=
    validation.kiemTraRong(
      password,
      "tbMatKhau",
      "(*) Password không được rỗng"
    ) &&
    validation.kiemTraDoDaiKyTu(
      password,
      "tbMatKhau",
      "(*) Ky tu 6 - 12",
      6,
      12
    );

  /* Chuc Vu */
  isValid &= validation.kiemTraChucVu(
    "chucvu",
    "tbChucVu",
    "(*) Vui lòng chọn chức vụ"
  );

  
  if (isValid) {
    var nhanVien = new NhanVien(maNV,hoTen,email,password,date,chucVu);
    danhSachNhanVien.capNhatNhanVien(nhanVien);
    // getEle("myModal").style.display = "none";
    taoBang();
    setLocalStorage();
  }
  
})

function suaNhanVien(maNV){
  console.log(maNV);
  getEle("btnThemNV").style.display = "none";
  getEle("btnCapNhat").style.display = "block"

  var nhanvien = danhSachNhanVien.layThongTinNguoiDung(maNV);
  getEle("msnv").value = nhanvien.maNV;
  getEle("msnv").setAttribute("disabled",true);
  getEle("name").value = nhanvien.hoTen;
  getEle("email").value = nhanvien.email;
  getEle("password").value = nhanvien.password;
  getEle("datepicker").value = nhanvien.date;
  getEle("chucvu").value = nhanvien.chucVu;

}


// Luu mang xuong LocalStore
function setLocalStorage(){
  localStorage.setItem("DanhSachNhanVien", JSON.stringify(danhSachNhanVien.mangNhanVien));
}

// Lay mang tu localStorage
function getLocalStorage(){
    if(localStorage.getItem("DanhSachNhanVien")){
    danhSachNhanVien.mangNhanVien = JSON.parse( localStorage.getItem("DanhSachNhanVien"));
  }
    taoBang();
}

function getEle(id) {
  return document.getElementById(id);
}
