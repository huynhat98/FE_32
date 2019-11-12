function Validation() {
  this.kiemTraTrungMaNV = function(input, spanId, message, mangNhanVien) {
    /*
      1. Duyệt mảng
      2. So sánh input có trùng MaNV trong mảng không
      3. Nếu như input trùng MaNV trong mảng => return false
      4. Ngược lại => return true
    */

    var check = mangNhanVien.some(function(item) {
      return input === item.maNV;
    });

    if (check) {
      getEle(spanId).style.display = "block";
      getEle(spanId).innerHTML = message;
      return false;
    }

    getEle(spanId).style.display = "none";
    getEle(spanId).innerHTML = "";
    return true;
  };

  this.kiemTraRong = function(input, spanId, message) {
    if (input === "") {
      getEle(spanId).style.display = "block";
      getEle(spanId).innerHTML = message;
      return false;
    }
    getEle(spanId).style.display = "none";
    getEle(spanId).innerHTML = "";
    return true;
  };

  this.kiemTraDoDaiKyTu = function(input, spanId, message, min, max) {
    if (input.length >= min && input.length <= max) {
      // Hop le
      getEle(spanId).style.display = "none";
      getEle(spanId).innerHTML = "";
      return true;
    }
    //K hop le
    getEle(spanId).style.display = "block";
    getEle(spanId).innerHTML = message;
    return false;
  };

  this.kiemTraChucVu = function(id, spanId, message) {
    if (getEle(id).selectedIndex !== 0) {
      //Hop le
      getEle(spanId).style.display = "none";
      getEle(spanId).innerHTML = "";
      return true;
    }
    //K hop le
    getEle(spanId).style.display = "block";
    getEle(spanId).innerHTML = message;
    return false;
  };

  this.checkEmail = function(input, spanId, message) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (input.match(mailformat)) {
      //Hop le
      getEle(spanId).style.display = "none";
      getEle(spanId).innerHTML = "";
      return true;
    }
    //K hop le
    getEle(spanId).style.display = "block";
    getEle(spanId).innerHTML = message;
    return false;
  };

  this.kiemTraChuoi = function(input, spanId, message) {
    var pattern = new RegExp(
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
        "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
        "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$"
    );

    if (pattern.test(input)) {
      //Hop le
      getEle(spanId).style.display = "none";
      getEle(spanId).innerHTML = "";
      return true;
    }
    //K hop le
    getEle(spanId).style.display = "block";
    getEle(spanId).innerHTML = message;
    return false;
  };
}
