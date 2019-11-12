var danhSachNguoiDung = new DanhSachNguoiDung();
var validation = new Validation();

getLocalStorage();

getEle('btnThemNguoiDung').addEventListener('click',function(){
    getEle('TaiKhoan').removeAttribute("disabled");
    getEle('btnCapNhatND').style.display = 'none';
    getEle('btnThemND').style.display ='block';
    
});

getEle('btnThemND').addEventListener('click',function(){

    var taiKhoan = getEle('TaiKhoan').value;
    var matKhau = getEle('MatKhau').value;
    var hoTen = getEle('HoTen').value;
    var email = getEle('Email').value;
    var soDT = getEle('SoDienThoai').value;

    var isValid = true;

    /*Tai Khoan */
    isValid &= 
        validation.kiemTraRong(taiKhoan,'tbTaiKhoan','(*) Tài khoản không để trống!')
    &&
        validation.kiemTraTrung(taiKhoan, 'tbTaiKhoan', '(*) Tài khoản đã tồn tại!',danhSachNguoiDung.mangNguoiDung);
    
    /*Ho ten*/
    isValid &= 
        validation.kiemTraRong(hoTen,'tbHoTen','(*) Họ tên không được để trống!') 
    && 
        validation.kiemTraChuoi(hoTen, 'tbHoTen','(*) Họ tên chứa ký tự không hợp lệ!');

    /*Mat Khau */
    isValid &= 
        validation.kiemTraRong(matKhau,'tbMatKhau','(*) Mật khẩu không được để trống!')
    && 
        validation.kiemTraDoDai(matKhau,'tbMatKhau','(*) Mật khẩu phải từ 6 đến 12 ký tự!',6,12);

    /*Email*/
    isValid &=
        validation.kiemTraRong(email, 'tbEmail', '(*) Email không được để trống!')
    &&
        validation.kiemTraEmail(email,'tbEmail',"(*) Email bạn nhập không hợp lệ!");
    
    /*So dien thoai*/
    isValid &=
        validation.kiemTraRong(soDT,'tbSDT','(*) Số điện thoại không được để trống!')
    &&
        validation.kiemTraSDT(soDT,'tbSDT','(*) Số điện thoại bạn nhập không hợp lệ');


    if(isValid){
        var nguoiDung = new NguoiDung(taiKhoan, matKhau, hoTen,email,soDT);
        danhSachNguoiDung.themNguoiDung(nguoiDung);
        taoBang();
        setLocalStorage();
    }    
});

function taoBang(mang = danhSachNguoiDung.mangNguoiDung){
    var tbody = getEle('tblDanhSachNguoiDung');
    var content = '';
    mang.map(function(item,index){
        content+= `
            <tr>
                <td>${index+1}</td>
                <td>${item.taiKhoan}</td>
                <td>${item.matKhau}</td>
                <td>${item.hoTen}</td>
                <td>${item.email}</td>
                <td>${item.soDT}</td>
                <td>
                    <button class="btn btn-success" data-toggle="modal" data-target="#myModal" onclick="suaNguoiDung('${item.taiKhoan}')">Sửa</button>
                    <button class="btn btn-danger" onclick="xoa('${item.taiKhoan}')">Xóa</button>
                </td>
            </tr>
        `;
    });
    tbody.innerHTML = content;
}


getEle('search').addEventListener("keyup",function(){
    var chuoiTimKiem = getEle('search').value;
    var mangTimKiem = danhSachNguoiDung.timNguoiDung(chuoiTimKiem);
    taoBang(mangTimKiem);
});

function xoa(taiKhoan){
    danhSachNguoiDung.xoaNguoiDung(taiKhoan);
    taoBang();
    setLocalStorage();
}

function suaNguoiDung(taiKhoan){
    getEle('btnThemND').style.display = "none";
    getEle('btnCapNhatND').style.display = "block";

    var nguoiDung = danhSachNguoiDung.layThongTin(taiKhoan);
    
    getEle('TaiKhoan').value = nguoiDung.taiKhoan;
    getEle('TaiKhoan').setAttribute('disabled', true);
    getEle('MatKhau').value = nguoiDung.matKhau;
    getEle('HoTen').value = nguoiDung.hoTen;
    getEle('Email').value = nguoiDung.email;
    getEle('SoDienThoai').value = nguoiDung.soDT;

}

getEle('btnCapNhatND').addEventListener('click', function(){
    

    var taiKhoan = getEle('TaiKhoan').value;
    var hoTen = getEle('HoTen').value;
    var matKhau = getEle('MatKhau').value;
    var email = getEle('Email').value;
    var soDT = getEle('SoDienThoai').value;


    
    var isValid = true;
    /*Ho ten*/
    isValid &=
        validation.kiemTraRong(hoTen, 'tbHoTen', '(*) Họ tên không được để trống!')
        &&
        validation.kiemTraChuoi(hoTen, 'tbHoTen', '(*) Họ tên chứa ký tự không hợp lệ!');

    /*Mat Khau */
    isValid &=
        validation.kiemTraRong(matKhau, 'tbMatKhau', '(*) Mật khẩu không được để trống!')
        &&
        validation.kiemTraDoDai(matKhau, 'tbMatKhau', '(*) Mật khẩu phải từ 6 đến 12 ký tự!', 6, 12);

    /*Email*/
    isValid &=
        validation.kiemTraRong(email, 'tbEmail', '(*) Email không được để trống!')
        &&
        validation.kiemTraEmail(email, 'tbEmail', "(*) Email bạn nhập không hợp lệ!");

    /*So dien thoai*/
    isValid &=
        validation.kiemTraRong(soDT, 'tbSDT', '(*) Số điện thoại không được để trống!')
        &&
        validation.kiemTraSDT(soDT, 'tbSDT', '(*) Số điện thoại bạn nhập không hợp lệ');

    if (isValid) {
        var nguoiDung = new NguoiDung(taiKhoan, matKhau, hoTen, email, soDT);
        danhSachNguoiDung.capNhatNguoiDung(nguoiDung);
        taoBang();
        setLocalStorage();
    }
})

//localStorage
function setLocalStorage(){
    localStorage.setItem(
        "DanhSachNguoiDung",JSON.stringify(danhSachNguoiDung.mangNguoiDung)
    );
}

function getLocalStorage(){
    if(localStorage.getItem("DanhSachNguoiDung")){
        danhSachNguoiDung.mangNguoiDung = JSON.parse(localStorage.getItem("DanhSachNguoiDung"))
        taoBang();
    }
}

//getElementByid
function getEle(id){
    return document.getElementById(id);
}