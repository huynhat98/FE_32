function Validation(){
    this.kiemTraRong = function(input, spanId, message) {
        if (input === "") {
            getEle(spanId).style.display = "block";
            getEle(spanId).innerHTML = message;
            return false;
        } else {
            getEle(spanId).style.display = "none";
            getEle(spanId).innerHTML = "";
            return true;
        }
    }

    this.kiemTraKyTu = function(input, spanId, message, min, max) {
        if (input.length >= min && input.length <= max) {
            getEle(spanId).style.display = "none";
            getEle(spanId).innerHTML = "";
            return true;
        } else {
            getEle(spanId).style.display = "block";
            getEle(spanId).innerHTML = message;
            return false;
        }
    }

    this.kiemTraChucVu = function(id, spanId, message) {
        if (getEle(id).selectedIndex !== 0) {
            getEle(spanId).style.display = "none";
            getEle(spanId).innerHTML = "";
            return true;
        } else {
            getEle(spanId).style.display = "block";
            getEle(spanId).innerHTML = message;
            return false;
        }
    }

    this.CheckEmail = function(input, spanId, message) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (input.match(mailformat)) {
            getEle(spanId).style.display = "none";
            getEle(spanId).innerHTML = "";
            return true;
        } else {
            getEle(spanId).style.display = "block";
            getEle(spanId).innerHTML = message;
            return false;
        }
    }

    this.kiemTraChuoi = function(input, spanId, message) {
        var pattern = new RegExp(

            "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +

            "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +

            "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$"

        );
        if (pattern.test(input)) {
            getEle(spanId).style.display = "none";
            getEle(spanId).innerHTML = "";
            return true;
        } else {
            getEle(spanId).style.display = "block";
            getEle(spanId).innerHTML = message;
            return false;
        }
    }
}