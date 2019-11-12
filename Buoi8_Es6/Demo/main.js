// import { total } from "./test.js"
// console.log("Tinh tong: ", total);
// import tong from "./test.js";
// console.log("Tinh tong: ", tong);

import {total,tinhTong,tinhHieu} from "./test.js";
console.log(total,tinhTong,tinhHieu);



function foo() {
    var x = 10;
    if (true) {
    var x = 20;
        console.log(x);
    }
        console.log(x);
}

function foo2(){
    let x = 10;
    if(true){
    let x= 20;
        console.log(x);
    }
    console.log(x);
}
foo();
foo2();

for (var index = 0; index < 4; index++) {
    console.log(index);   
}

console.log(index);

for (let index2 = 0; index2 < 4; index2++) {
    console.log(index2);
}
console.log(index2);


number = 10;
var number;


console.log(number);
var number = 10;

/* function */

/* function test() {
}

function test3(){
    return 10;
} */

/* 
    Arrow function
*/

let test1 = () => {
    console.log("Hello");
};

// 1 tham so k can dau ngoac tron
let test1 = name => {
    console.log("Hello " + name);
};

test1("Cybersoft");

// 2 tham so tro len
let test2 = (name, number) => {
    console.log("Hello " + name +" "+ number);
};

test2("Cybersoft",1);

let test4 = () => 10;


let hocVien = {
    hoTen : 'Nguyen Van A',
    lop : 'FE 32',

    layThongTinNhanVien: function(){
        console.log(this);
        let _bind = this;
        function hienThiThongTin(){
            console.log(this);
            
            console.log(`Ho ten: ${_bind.hoTen} - lop: ${_bind.lop}`);
        }
        hienThiThongTin();
    }
}

hocVien.layThongTinNhanVien();

let hocVien2 = {
    hoTen : 'Nguyen Ho A',
    lop: 'FE 32',
    layThongTinNhanVien: function(){
        let hienThiThongTin = () => {
            console.log(`Ho ten: ${this.hoTen} - lop: ${this.lop}`);
        };
        hienThiThongTin();
    }
}

hocVien2.layThongTinNhanVien();

/* 
    Rest Params
*/
function sum(...numbers){
/*     let tong = 0;
    numbers.map((item, index) => {
        tong+= item;
    });
    console.log(tong); */

    return numbers.reduce((a, b) => {
        return a + b;
    },0);

}

let kq = sum(1,2,3,4,5,6,7);
console.log(kq);

/* Spread Operator */
// let mangA = [1,2,3];
// let mangB = mangA;

// mangB.push(4);
// mangB.push(5);

// console.log(mangA); // 1 2 3 4 5
// console.log(mangB); // 1 2 3 4 5


let mangA = [1,2,3];
let mangB = [...mangA, 4, 5];

console.log(mangA); // 1 2 3 
console.log(mangB); // 1 2 3 4 5

/* let object = {
    ten: 'Nguyen',
    tuoi: '18',
}

let object2 = object;
object2.lop = 'FE 32';

console.log(object);
 */

let object = {
    ten: "Nguyen",
    tuoi: "18"
};

let object2 = {...object,lop: 'FE 32'};

console.log(object);
console.log(object2);


/* Default params */
let getInfo = (name = "Nguyen", age = '18') => {
    console.log(name,age);
};

getInfo();

/* Destructuring boc tach*/
let mangC = [1,2];
let [a, b] = mangC;
console.log(a +" "+b);

let people = {
    name: 'Nguyen',
    age: 20
};

let {name, age} = people;
console.log(people);

/* Template String */
let ten = 'Nguyen';
let result = 'Hello' + ten; // cong chuoi truyen thong
let result2 = `Hello ${ten}`; // Template Strings

/* Object liteals (object chan phuong) */
let hoTen = 'Nguyen';
let lop = 'FE 32';

let ObjectPeople = {
    // Trung ten nen bo => chan phuong
    /* hoTen: hoTen, 
    lop: lop */
    hoTen, // hoTen: hoTen
    lop    //lop: lop
};

let propHoTen = "hoTen";
let propLop = 'lop'

let propObjectPeople = {
    [propHoTen]: 'Nguyen',
    [propLop]: 'FE 32'
}

/* For in */
let listFriend = ['Nguyen', 'Dat', 'Phuc', 'Dat'];
for(let index in listFriend){
    console.log(index);
}

/* For of */
for (let item of listFriend){
    console.log(item);
}



