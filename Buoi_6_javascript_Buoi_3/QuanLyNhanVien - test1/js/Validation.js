function Validation(){
    this.kiemTraRong = function(input,id,message){
        if(input === ''){
            getEle(id).style.display = "block";
            getEle(id).innerHTML = message;
            return false;
        }else{
            getEle(id).style.display = "none";
            getEle(id).innerHTML = "";
            return true;
        }
    };

}

