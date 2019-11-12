console.log("Cybersoft");

/* Biến */
var name = "Cybersoft";
var number = 123;
var status = false;
var phoneNumber = 12345678;
var objSinhVien = {
  //key: value
  maSV: 123,
  tenSV: "Nguyen"
};
var mang = [1, 2, 3, 4];

/* Hằng số */
const PI = 3.14;

/* Câu điều kiện if else */
if (false) {
  console.log("DK đúng");
} else {
  console.log("DK sai");
}

if ("1" === 1) {
  console.log("so sanh đúng");
} else {
  console.log("so sanh k đúng");
}

// điều kiên ? dk đúng : dk sai
"1" === 1 ? console.log("so sanh đúng") : console.log("so sanh k đúng");

/* Câu điều kiện switch case */
switch (3) {
  case 0:
    console.log("so 0");
    break;

  case 1:
    console.log("so 1");
    break;

  case 2:
    console.log("so 2");
    break;

  default:
    console.log("default");
    break;
}

/* Mảng */
var mangChuoi = ["A", "B", "C", "D", "E"];

// console.log(mangChuoi[0]);
// console.log(mangChuoi[1]);
// console.log(mangChuoi[2]);
// console.log(mangChuoi[3]);
// console.log(mangChuoi[4]);

for (var i = 0; i < mangChuoi.length; i++) {
  console.log(i);
}

//map
mangChuoi.map(function(item, index) {
  console.log(item, index);
});

mangChuoi.forEach(function(item, index) {
  console.log(item, index);
});

/* Hàm */
/*
  - Hàm không trả về
  - Hàm có trả về => return
  - Hàm không có tham số
  - Hàm có tham số
*/

var num1 = 2;
var num2 = 3;
var num3 = 4;
var num4 = 6;

var tong = num1 + num2; // => 5
console.log("tong la: " + tong);

var tong2 = num3 + num4;
console.log("tong2 la: " + tong2);

function tinhTong() {
  var kq = num1 + num2;
  console.log(kq);
  return kq;
}

function tinhTong2() {
  var kq = num3 + num4;
  console.log(kq);
  return kq;
}

function tinhTong3(a, b) {
  var kq = a + b;
  console.log(kq);
  return kq;
}
tinhTong3(5, 7);
tinhTong3(14, 6);

var num6 = 10;

tinhTong();
var tongNum6 = 10 + tinhTong();

/**
 * Bài tập xêp loại SV
 * - Hàm tinhDTB()
 * - Hàm xepLoai()
 */

// Đầu vào
var diemToan = 3;
var diemLy = 2;
var diemHoa = 1;

//Xử lý
function tinhDTB() {
  var dtb = (diemToan + diemLy + diemHoa) / 3;
  return dtb;
}

var diemTB = tinhDTB();

xepLoai();

function xepLoai() {
  if (diemTB >= 9 && diemTB <= 10) {
    console.log("Xuat sac");
  } else if (diemTB >= 8) {
    console.log("Gioi");
  } else if (diemTB >= 7) {
    console.log("Kha");
  } else if (diemTB >= 6) {
    console.log("TB Kha");
  } else if (diemTB >= 5) {
    console.log("TB");
  } else {
    console.log("Yeu");
  }
}

/**
 * DOM
 */
var input = document.getElementById("username").value;
console.log(input);

/**
 * Event click
 */
//Cach 1 onclick
// document.getElementById("btnNhanEmDi").onclick = function() {
//   console.log(21321321);
// };

//Cach 2 addEventListener
document.getElementById("btnNhanEmDi").addEventListener("click", function() {
  console.log(21321321);
  document.getElementById("idBeforeText").innerHTML =
    "Noi dung sau khi thay doi";
});

//Cach 3 sử dụng function
// function nhanEmDi() {
//   console.log(21321321);
// }

document.getElementById("btnChangeColor").addEventListener("click", function() {
  document.getElementById("txtTextChangeColor").innerHTML =
    "Text sau khi đổi màu";
  document.getElementById("txtTextChangeColor").style.color = "red";
  document.getElementById("txtTextChangeColor").style.backgroundColor = "blue";
});

document.getElementById("btnOn").addEventListener("click", function() {
  document.getElementById("imgBulb").src = "./imgs/pic_bulbon.gif";
});

document.getElementById("btnOff").addEventListener("click", function() {
  document.getElementById("imgBulb").src = "./imgs/pic_bulboff.gif";
});

document.getElementById("btnHideText").addEventListener("click", function() {
  document.getElementById("txtHideText").style.display = "none";
});

document.getElementById("btnDisable").addEventListener("click", function() {
  document.getElementById("btnHideText").disabled = true;
});

/**
 * Click vào nút Login => DOM id
 * Kiểm tra điều kiện:
 *      Nếu như username === "cybersoft" và password === "cybersoft"
 * => Thông báo Login thành công
 *      Ngược lại
 * => Thông báo Login không thành công
 */

document.getElementById("btnLogin").addEventListener("click", function() {
  var username = document.getElementById("txtUsername").value;
  var password = document.getElementById("txtPassword").value;

  if (username === "cybersoft" && password === "cybersoft") {
    // console.log("thanh cong");
    // document.getElementById("txtThongBao").style.display = "block";
    // document.getElementById("txtThongBao").innerHTML = "Login success";
    // document.getElementById("txtThongBao").style.backgroundColor = "green";
    // document.getElementById("txtThongBao").style.color = "white";
    ChangeStyleLogin("block", "Login success", "green", "white");
  } else {
    // document.getElementById("txtThongBao").style.display = "block";
    // document.getElementById("txtThongBao").innerHTML = "Login no success";
    // document.getElementById("txtThongBao").style.backgroundColor = "red";
    // document.getElementById("txtThongBao").style.color = "white";
    ChangeStyleLogin("block", "Login no success", "red", "white");
  }
});

function ChangeStyleLogin(display, text, bg, color) {
  document.getElementById("txtThongBao").style.display = display;
  document.getElementById("txtThongBao").innerHTML = text;
  document.getElementById("txtThongBao").style.backgroundColor = bg;
  document.getElementById("txtThongBao").style.color = color;
  document.getElementById("txtThongBao").style.fontSize = "30px";
}

/**
 * TagName
 */
var button = document.getElementsByTagName("button")[2].value;
console.log(button);

/**
 * className
 */
var className = document.getElementsByClassName("btn")[3];
console.log(className);

/**
 * querySlector
 */

var querySelector = document.querySelector("button");
console.log(querySelector);

/**
 * querySlectorAll
 */
var querySlectorAll = document.querySelectorAll("button")[2];
console.log(querySlectorAll);

/**
 * tinhTien = tongTien * phanTramTip / 100 / soNguoi;
 */

document.getElementById("btnTinhTienTip").addEventListener("click", function() {
  var txtTongTong = document.getElementById("txtTongTien").value;
  var slPhanTramTip = document.getElementById("slPhanTramTip").value;
  var soNguoi = document.getElementById("txtSoNguoi").value;

  var total = (txtTongTong * slPhanTramTip) / 100 / soNguoi;
  console.log(total);

  document.getElementById("txtThongBaoTienTip").style.display = "block";
  document.getElementById("txtThongBaoTienTip").innerHTML =
    "<p>" + total + " $/nguoi </p>";
});
