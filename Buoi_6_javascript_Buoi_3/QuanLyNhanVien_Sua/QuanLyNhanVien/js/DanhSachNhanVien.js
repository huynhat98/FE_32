function DanhSachNhanVien() {
  this.mangNhanVien = [];

  this.themNhanVien = function(nhanVien) {
    this.mangNhanVien.push(nhanVien);
  };

  this.xoaNhanVien = function(maNV){
    /**
     * 0 Tao 1 bien viTri = -1;
     * 1 duyet mang
     * 2 Neu maNV === item.MaNV
     * 3 viTri = index;
     * 4 array.splice(vitri, 1);
     */
    var viTri = this.timViTri(maNV);

    if(viTri !== -1){
      this.mangNhanVien.splice(viTri,1);
    }
  }

  this.timViTri = function(maNV){
    var viTri = -1;
    this.mangNhanVien.map(function (item, index) {
      if (maNV === item.maNV) {
        viTri = index;
      }
    });
    return viTri;
  }
}

DanhSachNhanVien.prototype.layThongTinNguoiDung = function(maNV){
  var viTri = this.timViTri(maNV);
  return this.mangNhanVien[viTri]
}

DanhSachNhanVien.prototype.capNhatNhanVien = function(nhanVien){
  var viTri = this.timViTri(nhanVien.maNV);
  if(viTri !== -1){
    this.mangNhanVien[viTri] = nhanVien;
  }
}

DanhSachNhanVien.prototype.timNhanVien = function(chuoiTimKiem){
  /**
   * 0 mangTimKiem = []
   * 1 duyet mang
   * 2 Nếu chuoiTimKiem ton tai trong mang
   * 3 mangTimKiem.push nhân viên tìm thấy
   * 3 trả về mảng tìm kiếm
   */

  var mangTimKiem = [];
  this.mangNhanVien.map(function(item){
    if(item.hoTen.toLowerCase().indexOf(chuoiTimKiem.toLowerCase()) > -1){
      mangTimKiem.push(item);
    }
  });
  return mangTimKiem;

}