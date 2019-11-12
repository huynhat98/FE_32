var validation = new Validation();

getEle("btnThem").addEventListener("click",function(){
    getEle("btnCapNhat").style.display = "none";
});

getEle("btnThemNV").addEventListener("click",function(){
    var maNV = getEle("msnv").value;
    var hoTen = getEle("name").value;
    var email = getEle("email").value;
    var password = getEle("password").value;
    var date = getEle("datepicker").value;
    var chucVu = getEle("chucvu").value;

    var isValid = true;
    isValid &= validation.kiemTraRong(maNV, "tbMaNV", "Mã nhân viên không được bỏ trống");

});


function getEle(id){
    return document.getElementById(id);
}