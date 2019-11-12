var quangDuong = document.getElementById("soKM");
var thoiGianCho = document.getElementById("tgCho");
var hopLe = true;
var tienCho = 0;
var tienDi = 0;
var tongTien;



document.getElementById("tinhTien").addEventListener("click",function(){

    if (document.getElementById("uberX").checked === true) {
        tinhThoiGianCho(2000);
        tinhTienDi(8000,12000,10000);
        tinhTongTien(tienCho,tienDi);
    } 
    else if (document.getElementById("uberSUV").checked === true) {
        tinhThoiGianCho(3000);
        tinhTienDi(9000, 14000, 12000);
        tinhTongTien(tienCho, tienDi);
    } 
    else if (document.getElementById("uberBlack").checked === true) {
        tinhThoiGianCho(4000);
        tinhTienDi(10000, 16000, 14000);
        tinhTongTien(tienCho, tienDi);
    }
    else{
        alert("Vui Lòng Chọn Loại Xe Trước Khi Tính");
    }

})

document.getElementById("inHoaDon").addEventListener("click", function () {

    if (document.getElementById("uberX").checked === true) {
        tinhTienDi(8000, 12000, 10000);
        inHoaDon(tienDi);
    }
    else if (document.getElementById("uberSUV").checked === true) {
        tinhTienDi(9000, 14000, 12000);
        inHoaDon(tienDi);
    }
    else if (document.getElementById("uberBlack").checked === true) {
        tinhTienDi(10000, 16000, 14000);
        inHoaDon(tienDi);
    }
    else {
        alert("Vui Lòng Chọn Loại Xe Trước Khi Tính");
    }

})


function tinhThoiGianCho(soTienCho){
    if(thoiGianCho.value >= 0){
        tienCho = soTienCho*thoiGianCho.value;
    }else{
        hopLe = false;
    }
}

function tinhTienDi(muc1,muc2,muc3){
    if (quangDuong.value > 0 && quangDuong.value <1){
        tienDi = muc1;
    }
    else if(quangDuong.value >=1 && quangDuong.value <21){
        tienDi = muc2*quangDuong.value;
    }
    else if(quangDuong.value >= 21){
        tienDi = muc3 * quangDuong.value;
    } 
    else{
        hopLe = false;
    }
}

function tinhTongTien(soTienCho,soTienDi){
        if (hopLe === true) {
            tongTien = soTienCho + soTienDi;
            document.getElementById("divThanhTien").style.display = "block";
            document.getElementById("xuatTien").innerHTML = tongTien
        } else {
            alert("Số bạn nhập không hợp lệ...Xin vui lòng nhập lại!")
            hopLe = true;
        }
}

function inHoaDon(soTienDi){
    if (hopLe === true) {
        document.getElementById("divThanhTien").style.display = "block";
        document.getElementById("xuatTien").innerHTML = quangDuong.value + " km - " + soTienDi;
    } else {
        alert("Số bạn nhập không hợp lệ...Xin vui lòng nhập lại!")
        hopLe = true;
    }
}
