function Validation(){

    this.kiemTraTrung = function(input, spanId, message,mangNguoiDung){
        var check = mangNguoiDung.some(function(item){
            return input === item.taiKhoan;
        });
        if(check){
            getEle(spanId).style.display = "block";
            getEle(spanId).innerHTML = message;
            return false;
        }else{
            getEle(spanId).style.display = "none";
            getEle(spanId).innerHTML = "";
            return true;
        }
    };


    this.kiemTraRong = function(input, spanId, message){
        if(input === ""){
            getEle(spanId).style.display = "block";
            getEle(spanId).innerHTML = message;
            return false;
        }else{
            getEle(spanId).style.display = "none";
            getEle(spanId).innerHTML = "";
            return true;
        }
    };

    this.kiemTraDoDai = function(input,spanId,message,min,max){
        if( input.length >= min && input.length <= max){
            getEle(spanId).style.display = "none";
            getEle(spanId).innerHTML = "";
            return true;
        }else{
            getEle(spanId).style.display = "block";
            getEle(spanId).innerHTML = message;
            return false;
        }
    };

    this.kiemTraChuoi = function (input, spanId, message) {
        var pattern = new RegExp(
            "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
            "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
            "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$"
        );

        if (pattern.test(input)) {
            getEle(spanId).style.display = "none";
            getEle(spanId).innerHTML = "";
            return true;
        }else{      
            getEle(spanId).style.display = "block";
            getEle(spanId).innerHTML = message;
            return false;
        }
    };

    this.kiemTraEmail = function(input,spanId,message){
        var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(input.match(mailFormat)){
            getEle(spanId).style.display = "none"
            getEle(spanId).innerHTML = "";
            return true;
        }else{
            getEle(spanId).style = "block";
            getEle(spanId).innerHTML = message;
            return false;
        }
    };

    this.kiemTraSDT = function(input,spanId,message){
        var phoneFormat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 
        if(input.match(phoneFormat)){
            getEle(spanId).style.display = 'none';
            getEle(spanId).innerHTML = "";
            return true;
        }else{
            getEle(spanId).style.display = 'block';
            getEle(spanId).innerHTML = message;
            return false;
        }
    };

}