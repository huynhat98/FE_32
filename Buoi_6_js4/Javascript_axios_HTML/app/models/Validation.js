function Validation(){

    this.kiemTraTrung = function(input,spanId,message,mangNguoiDung){
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

    this.kiemTraRong = function(input, sapanID, message){
        if(input === ''){
            getEle(sapanID).style.display = 'block';
            getEle(sapanID).innerHTML = message;
            return false;
        } else{
            getEle(sapanID).style.display = 'none';
            getEle(sapanID).innerHTML = '';
            return true;
        }
    }

    this.kiemTraDoDai = function(input,sapanID, message, min, max){
        if(input.length >= min && input.length <= max){
            getEle(sapanID).style.display = 'none';
            getEle(sapanID).innerHTML = '';
            return true;
        }else{
            getEle(sapanID).style.display = 'block';
            getEle(sapanID).innerHTML = message;
            return false;
        }
    }

    this.kiemTraChuoi = function(input,sapanID,message){
        var pattern = new RegExp(
            "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
            "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
            "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$"
        );
        
        if(pattern.test(input)){
            getEle(sapanID).style.display = 'none';
            getEle(sapanID).innerHTML = '';
            return true;
        }else{
            getEle(sapanID).style.display = 'block';
            getEle(sapanID).innerHTML = message;
            return false;
        }
    };

    this.kiemTraEmail = function(input,sapanID,message){
        var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(input.match(mailFormat)){
            getEle(sapanID).style.display = 'none';
            getEle(sapanID).innerHTML = '';
            return true;
        }else{
            getEle(sapanID).style = 'block';
            getEle(sapanID).innerHTML = message;
            return false
        }
    };

    this.kiemTraSDT = function(input,sapanID,message){
        var phoneFormat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 

        if(input.match(phoneFormat)){
            getEle(sapanID).style.display = 'none';
            getEle(sapanID).innerHTML = '';
            return true;
        }else{
            getEle(sapanID).style.display = 'block';
            getEle(sapanID).innerHTML = message;
            return false;
        }
    }

}