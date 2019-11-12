
var danhSachSinhVien = new DanhSachSinhVien();

document.getElementById("btnThem").addEventListener("click",function(){

    var maSV = getEle("txtMaSV").value;
    var tenSV = getEle("txtTenSV").value;
    var loaiSV = getEle("loaiSV").value;
    var diemToan = getEle("txtDiemToan").value;
    var diemLy = getEle("txtDiemLy").value;
    var diemHoa = getEle("txtDiemHoa").value;
    var diemRL = getEle("txtDiemRenLuyen").value;

    var sinhVien = new SinhVien(maSV,tenSV,loaiSV,diemToan,diemLy,diemHoa,diemRL);

    danhSachSinhVien.themSV(sinhVien);
    
    taoBang();
    
})

function taoBang(){

        var tbody = document.getElementById("tbodySinhVien");
        tbody.innerHTML = "";

    // duyet mang
    for(var i = 0;i< danhSachSinhVien.mangSinhVien.length; i++){
        var tagTR = document.createElement("tr");

        var tagTDMaSV = document.createElement("td");
        var tagTDTenSV = document.createElement("td");
        var tagTDLoaiSV = document.createElement("td");
        var tagTDDiemTB = document.createElement("td");
        var tagTDDiemRenLuyen = document.createElement("td");

        tagTDMaSV.innerHTML = danhSachSinhVien.mangSinhVien[i].maSV;
        tagTDTenSV.innerHTML = danhSachSinhVien.mangSinhVien[i].tenSV;
        tagTDLoaiSV.innerHTML = danhSachSinhVien.mangSinhVien[i].loaiSV;
        tagTDDiemTB.innerHTML = danhSachSinhVien.mangSinhVien[i].tinhDTB();
        tagTDDiemRenLuyen.innerHTML = danhSachSinhVien.mangSinhVien[i].diemRenLuyen;

        tagTR.appendChild(tagTDMaSV);
        tagTR.appendChild(tagTDTenSV);
        tagTR.appendChild(tagTDLoaiSV);
        tagTR.appendChild(tagTDDiemTB);
        tagTR.appendChild(tagTDDiemRenLuyen);

        tbody.appendChild(tagTR);
    }
}


function getEle(id) {
    return document.getElementById(id);
}