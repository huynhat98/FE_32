//Lay du lieu
var maSinhVien = getEle("txtMaSV");
var tenSinhVien = getEle("txtTenSV");
var loaiSinhVien = getEle("loaiSV");
var diemToan = getEle("txtDiemToan");
var diemVan = getEle("txtDiemVan");


document.getElementById("btnHienThi").addEventListener("click",function(){
    //Do du lieu ra
    getEle("spanTenSV").innerHTML = tenSinhVien.value;
    getEle("spanMaSV").innerHTML = maSinhVien.value;
    getEle("spanLoaiSV").innerHTML = loaiSinhVien.value;
    getEle("spanDTB").innerHTML =  tinhDiemTB(diemToan.value,diemVan.value);
    getEle("spanXepLoai").innerHTML = xepLoai(diemToan.value,diemVan.value);
    
})

function getEle(id){
    return document.getElementById(id);
}

function tinhDiemTB(diemA,diemB){
    return ((parseFloat(diemA)+ parseFloat(diemB))/2)
}

function xepLoai(toan,van){
    var dtb = tinhDiemTB(toan,van);
        if(dtb >= 9.0 && dtb <= 10.0){
            return "Xuất Sắc";
        }
        else if(dtb >=8.0 && dtb < 9)
        {
            return "Giỏi";
        }
        else if(dtb >=7 && dtb < 8){
            return "Khá";
        }
        else if (dtb >= 6 && dtb < 7) {
            return "Trung Bình Khá";
        }
        else if (dtb >= 5 && dtb < 6) {
            return "Trung Bình";
        }
        else if (dtb >= 0 && dtb < 5) {
            return "Yếu";
        }
        else{
            return"Điểm bạn nhập không hợp lệ";
        }

}