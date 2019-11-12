function DanhSachNguoiDung(){
    this.mangNguoiDung = [];

    this.timViTri = function(taiKhoan){
        var viTri = -1;
        this.mangNguoiDung.map(function(item,index){
            if(taiKhoan === item.taiKhoan){
                viTri = index;
            }
        });
        return viTri;
    };

}

DanhSachNguoiDung.prototype.layThongTin = function(taiKhoan){
    var viTri = this.timViTri(taiKhoan);
    return this.mangNguoiDung[viTri];
};

DanhSachNguoiDung.prototype.themNguoiDung = function (nguoiDung) {
    this.mangNguoiDung.push(nguoiDung);
};

DanhSachNguoiDung.prototype.xoaNguoiDung = function (taiKhoan) {
    var viTri = this.timViTri(taiKhoan);
    if (viTri !== -1) {
        this.mangNguoiDung.splice(viTri, 1);
    }
};

DanhSachNguoiDung.prototype.capNhatNguoiDung = function(nguoiDung){
    var viTri = this.timViTri(nguoiDung.taiKhoan);
    if(viTri !== -1){
        this.mangNguoiDung[viTri] = nguoiDung;
    }
};

DanhSachNguoiDung.prototype.timNguoiDung = function(chuoiTimKiem){
    var mangTimKiem = [];
    this.mangNguoiDung.map(function(item){
        if (item.hoTen.toLowerCase().indexOf(chuoiTimKiem.toLowerCase()) > -1) {
            mangTimKiem.push(item);
        }
    });
    return mangTimKiem;
};