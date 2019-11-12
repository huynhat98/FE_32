function SinhVien( _maSV, _tenSV, _loaiSV, _diemToan, _diemLy, _diemHoa, _diemRenLuyen){
    this.maSV = _maSV;
    this.tenSV = _tenSV;
    this.loaiSV = _loaiSV;
    this.diemToan = _diemToan;
    this.diemLy = _diemLy;
    this.diemHoa = _diemHoa;
    this.diemRenLuyen = _diemRenLuyen;

    this.tinhDTB = function(){
        var dtb = (parseFloat(this.diemToan) + parseFloat(this.diemLy) + parseFloat(this.diemHoa))/3
        return dtb;
    };
}