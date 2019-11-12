function NguoiDungService() {
  // Get: lay danh sach nguoi dung
  // POST: them nguoi dung len server (day len)
  // PUT: Cap nhat nguoi dung
  // DELETE: Xoa nguoi dung


  this.themNguoiDung = function(nguoiDung) {
    return axios({
      method: "POST",
      url: "http://5dbacba23ec5fb001431940d.mockapi.io/api/NguoiDung",
      data: nguoiDung
    });
  };

  this.layDanhSachNguoiDung = function() {
    // key : value
    return axios({
      method: "GET",
      // link api de lay json
      url: "http://5dbacba23ec5fb001431940d.mockapi.io/api/NguoiDung"
    });
  };

  this.xoaNguoiDung = function(id){
    return axios({
      method: "DELETE",
      url: `http://5dbacba23ec5fb001431940d.mockapi.io/api/NguoiDung/${id}`
    });
  }

  this.layThongTinNguoiDung = function(id){
    return axios({
      method: "GET",
      url: `http://5dbacba23ec5fb001431940d.mockapi.io/api/NguoiDung/${id}`
    });
  }

  this.capNhatNguoiDung = function(id, nguoiDung){
    return axios({
      method: "PUT",
      url: `http://5dbacba23ec5fb001431940d.mockapi.io/api/NguoiDung/${id}`,
      data: nguoiDung
    });
  }

  this.timKiemNguoiDung = function(chuoiTimKiem, mangNguoiDung){
    //Cách 1
    // var mangTimKiem = [];
    // mangNguoiDung.map(function(item){
    //   if(item.hoTen.toLowerCase().indexOf(chuoiTimKiem.toLowerCase()) > -1){
    //     mangTimKiem.push(item);
    //   }
    // });
    // return mangTimKiem;

    //Cách 2 dùng filter
    return mangNguoiDung.filter(function(item){
      return item.hoTen.toLowerCase().indexOf(chuoiTimKiem.toLowerCase()) > -1
    });

  }


}
