function Validation() {

  this.kiemTraTrungMaNV = function(input, spanId, message, mangNhanVien){
    /*
      1. Duyet mang 
      2. So sanh input co trung MaNV trong mang khong
      3. Neu nhu input trung MaNV trong mang => return false
      4. Nguoc lai => return true
    */ 
        // var check = true;
        // mangNhanVien.map(function(item){
        // if(input === item.maNV){
        //   getEle(spanId).style.display = "block";
        //   getEle(spanId).innerHTML = message;
        //   check = false;
        // }else{
        //   getEle(spanId).style.display = "none";
        //   getEle(spanId).innerHTML = "";
        //   check = true;
        // }

        

        var check = mangNhanVien.some(function(item){
            return input === item.maNV;
        });

        if (check === true){
          getEle(spanId).style.display = "block";
          getEle(spanId).innerHTML = message;
          return false;
        } else{
          getEle(spanId).style.display = "none";
          getEle(spanId).innerHTML = "";
          return true;
        }
    
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
