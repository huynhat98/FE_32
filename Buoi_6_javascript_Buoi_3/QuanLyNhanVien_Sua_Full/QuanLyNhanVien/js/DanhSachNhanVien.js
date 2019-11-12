function DanhSachNhanVien() {
  this.mangNhanVien = [];

  this.themNhanVien = function(nhanVien) {
    this.mangNhanVien.push(nhanVien);
  };

  this.xoaNhanVien = function(maNV) {
    /*
      0. Tao 1 bien viTri = -1;
      1. duyet mang
      2. Neu maNV === item.MaNV
      3. viTri = index;
      4. array.splice(viTri, 1);
    */

    var viTri = this.timViTri(maNV);

    if (viTri !== -1) {
      this.mangNhanVien.splice(viTri, 1);
    }
  };

  this.timViTri = function(maNV) {
    var viTri = -1;
    this.mangNhanVien.map(function(item, index) {
      if (maNV === item.maNV) {
        viTri = index;
      }
    });
    return viTri;
  };
}

DanhSachNhanVien.prototype.layThongTinNguoiDung = function(maNV) {
  var viTri = this.timViTri(maNV);
  return this.mangNhanVien[viTri];
};

DanhSachNhanVien.prototype.capNhatNhanVien = function(nhanVien) {
  var viTri = this.timViTri(nhanVien.maNV);

  if (viTri !== -1) {
    this.mangNhanVien[viTri] = nhanVien;
  }
};

DanhSachNhanVien.prototype.timNhanVien = function(chuoiTimKiem) {
  /**
   * 0. mangTimKiem = []
   * 1. duyệt mảng nhân viên
   * 2. Nếu chuoiTimKiem tồn tại trong mảng
   * 3. mangTimKiem.push nhân viên tim thấy
   * 4. trả về  mangTimKiem
   */

  var mangTimKiem = [];
  this.mangNhanVien.map(function(item) {
    //Thay 3 dấu bằng bằng hàm indexOf của javascript
    if (item.hoTen.toLowerCase().indexOf(chuoiTimKiem.toLowerCase()) > -1) {
      mangTimKiem.push(item);
    }
  });
  return mangTimKiem;
};
