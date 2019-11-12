//Lay du lieu
var _maSinhVien = getEle("txtMaSV");
var _tenSinhVien = getEle("txtTenSV");
var _loaiSinhVien = getEle("loaiSV");
var _diemToan = getEle("txtDiemToan");
var _diemVan = getEle("txtDiemVan");


document.getElementById("btnHienThi").addEventListener("click", function () {
    
    //Tao doi tuong
    var sinhVien = {
        // key : value
        //Thuộc tính
        maSV:_maSinhVien.value,
        tenSV: _tenSinhVien.value,
        loaiSV: _loaiSinhVien.value,
        diemToan: _diemToan.value,
        diemVan: _diemVan.value,
        // diemTB: 0,
        //Phương thức 
        tinhDTB: function(){
            return (parseFloat(this.diemToan) + parseFloat(this.diemVan))/2
            // this.diemTB = (parseFloat(this.diemToan) + parseFloat(this.diemVan))/2
            // return this.diemTB;
        },

        xepLoai: function(){
            var dtb = this.tinhDTB();
            if (dtb >= 9.0 && dtb <= 10.0) {
                return "Xuất Sắc";
            }
            else if (dtb >= 8.0 && dtb < 9) {
                return "Giỏi";
            }
            else if (dtb >= 7 && dtb < 8) {
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
            else {
                return "Điểm bạn nhập không hợp lệ";
            }
        }
    };

    //Do du lieu ra
    getEle("spanTenSV").innerHTML = sinhVien.tenSV;
    getEle("spanMaSV").innerHTML = sinhVien.maSV;
    getEle("spanLoaiSV").innerHTML = sinhVien.loaiSV;
    getEle("spanDTB").innerHTML = sinhVien.tinhDTB();
    // getEle("spanDTB").innerHTML = sinhVien.diemTB;
    getEle("spanXepLoai").innerHTML = sinhVien.xepLoai();
    
})

function getEle(id) {
    return document.getElementById(id);
}