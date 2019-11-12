var danhSachNhanVien = new DanhSachNhanVien();
var validation = new Validation();

getEle("btnThem").addEventListener("click",function(){
    getEle("btnCapNhat").style.display = "none";
})


getEle("btnThemNV").addEventListener("click",function(){
    var maNV = getEle("msnv").value;
    var tenNV = getEle("name").value;
    var email = getEle("email").value;
    var password = getEle("password").value;
    var date = getEle("datepicker").value;
    var chucVu = getEle("chucvu").value;

    danhSachNhanVien.themNhanVien(nhanVien);
    
    var isValid = true;

    // Ma Nhan vien
    isValid &= validation.kiemTraRong(maNV, "tbMaNV", "(*) MaNV viên không được rỗng");

    // Ho ten
    isValid &= validation.kiemTraRong(tenNV, 'tbTen', "(*) Họ tên không được rỗng") && validation.kiemTraChuoi(tenNV, 'tbTen', "(*) Họ tên không được chứa ký tự số"); 

    // Email
    isValid &= validation.kiemTraRong(email, 'tbEmail', "(*) Email không được rỗng") && validation.CheckEmail(email, 'tbEmail', "Email bạn nhập không hợp lệ!");

    // Password
    isValid &= validation.kiemTraRong(password, 'tbMatKhau', "(*) Password không được rỗng") && validation.kiemTraKyTu(password, 'tbMatKhau','(*) Ky tu 6 - 12', 6 ,12);
 
    // Chuc Vu
    isValid &= validation.kiemTraChucVu('chucvu', 'tbChucVu',"Phải chọn chức vụ")

    if(isValid){
        var nhanVien = new NhanVien(maNV, tenNV, email, password, date, chucVu);
        danhSachNhanVien.themNhanVien(nhanVien);
        taoBang();
    }
})

function kiemTraRong(input, spanId, message){
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

function kiemTraKyTu(input,spanId,message, min, max){
    if(input.length >= min && input.length <= max){
        getEle(spanId).style.display = "none";
        getEle(spanId).innerHTML = "";
        return true;
    } else{
        getEle(spanId).style.display = "block";
        getEle(spanId).innerHTML = message;
        return false;
    }
}

function kiemTraChucVu(id,spanId,message){
    if(getEle(id).selectedIndex !== 0){
        getEle(spanId).style.display = "none";
        getEle(spanId).innerHTML = "";
        return true;
    } else {
        getEle(spanId).style.display = "block";
        getEle(spanId).innerHTML = message;
        return false;
    }
}

function CheckEmail(input, spanId, message){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(input.match(mailformat)){
        getEle(spanId).style.display = "none";
        getEle(spanId).innerHTML = "";
        return true;
    } else {
        getEle(spanId).style.display = "block";
        getEle(spanId).innerHTML = message;
        return false;
    }
}

function kiemTraChuoi(input, spanId, message){
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

function taoBang() {
    var tbody = getEle("tableDanhSach");
    var content = "";
    danhSachNhanVien.mangNhanVien.map(function(item,index){
        content += `
            <tr>
                <td>${item.maNV}</td>
                <td>${item.hoTen}</td>
                <td>${item.email}</td>
                <td>${item.password}</td>
                <td>${item.date}</td>
                <td>${item.chucVu}</td>
            </tr>
        `;
    });

    tbody.innerHTML = content;






    // var tbody = document.getElementById("tableDanhSach");
    // tbody.innerHTML = "";

    // // duyet mang
    // for (var i = 0; i < danhSachNhanVien.mangNhanVien.length; i++) {
    //     var tagTR = document.createElement("tr");

    //     var tagTDMaSV = document.createElement("td");
    //     var tagTDTenSV = document.createElement("td");
    //     var tagTDEmail = document.createElement("td");
    //     var tagTDPassword = document.createElement("td");
    //     var tagTDNgaySinh = document.createElement("td");
    //     var tagTDChucVu = document.createElement("td");

    //     tagTDMaSV.innerHTML = danhSachNhanVien.mangNhanVien[i].maNV;
    //     tagTDTenSV.innerHTML = danhSachNhanVien.mangNhanVien[i].tenNV;
    //     tagTDEmail.innerHTML = danhSachNhanVien.mangNhanVien[i].email;
    //     tagTDPassword.innerHTML = danhSachNhanVien.mangNhanVien[i].password;
    //     tagTDNgaySinh.innerHTML = danhSachNhanVien.mangNhanVien[i].date;
    //     tagTDChucVu.innerHTML = danhSachNhanVien.mangNhanVien[i].chucVu;

    //     tagTR.appendChild(tagTDMaSV);
    //     tagTR.appendChild(tagTDTenSV);
    //     tagTR.appendChild(tagTDEmail);
    //     tagTR.appendChild(tagTDPassword);
    //     tagTR.appendChild(tagTDNgaySinh);
    //     tagTR.appendChild(tagTDChucVu);

    //     tbody.appendChild(tagTR);
    // }
}


function getEle(id){
    return document.getElementById(id);
}