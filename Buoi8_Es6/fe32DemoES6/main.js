import { total, tinhTong, tinhHieu } from "./test.js";
// import tong from "./test.js";

console.log("Tinh tong: ", total);
console.log("Tinh tong: ", tinhTong());
console.log("Tinh hieu: ", tinhHieu());

// var a = 1;
// var a = 10;

// let b = 2;
// b = 20;

// const c = 3;
// const e = 1;

function foo() {
  var x = 10;
  if (true) {
    var x = 20;
    console.log(x);
  }
  console.log(x);
}

function foo2() {
  let x = 10;
  if (true) {
    let x = 20;
    console.log(x);
  }
  console.log(x);
}

foo();
foo2();

// for (let i = 0; i < 4; i++) {
//   console.log(i);
// }

// console.log(i);

// number = 10;
// var number;

/**
 * Function
 */
function test() {}
function test2() {
  return 10;
}

/**
 * Arrow Function
 */
let test1 = (name, number) => {
  console.log("Hello " + name + "" + number);
};

let test3 = () => 10;

test1("Cybersoft", 123);

let hocVien = {
  hoTen: "Nguyen Van A",
  lop: "FE 32",

  layThongTinNhanVien: function() {
    console.log(this);
    let _bind = this;
    function hienThiThongTin() {
      console.log(`Ho ten: ${_bind.hoTen} - lop: ${_bind.lop}`);
    }

    hienThiThongTin();
  }
};

let hocVien2 = {
  hoTen: "Nguyen Van A",
  lop: "FE 32",

  layThongTinNhanVien: function() {
    let hienThiThongTin = () => {
      console.log(`Ho ten: ${this.hoTen} - lop: ${this.lop}`);
    };

    hienThiThongTin();
  }
};

hocVien.layThongTinNhanVien();
hocVien2.layThongTinNhanVien();

/**
 * Rest Params
 */

function sum(...numbers) {
  //   let tong = 0;
  //   numbers.map((item, index) => {
  //     tong += item;
  //   });
  //   console.log(tong);

  return numbers.reduce((a, b) => {
    return a + b;
  }, 0);
}

let kq = sum(1, 2, 3, 4, 5, 6, 7);
console.log(kq);

/**
 * Spread Operator
 */

// let mangA = [1, 2, 3];
// let mangB = mangA;

// mangB.push(4);
// mangB.push(5);

// console.log(mangA); //1 2 3 4 5
// console.log(mangB); // 1 2 3 4 5

let mangA = [1, 2, 3];
let mangB = [...mangA, 4, 5];

console.log(mangA);
console.log(mangB);

let object = {
  name: "Nguyen",
  age: "18"
};

let object2 = { ...object, lop: "FE 32" };

console.log(object);
console.log(object2);

/**
 * Default Params
 */
let getInfo = (name = "Nguyen", age = "18") => {
  console.log(name, age);
};

getInfo();

/**
 * Destructuring
 */

let mangC = [1, 2];

let [a, b] = mangC;
console.log(a, b);

let people = {
  name: "Nguyen",
  age: 20
};

let { name, age } = people;
console.log(name, age);

/**
 * Template Strings
 */
let ten = "Nguyen";
let result = "Hello " + ten; //cong chuoi truyen thong
let result2 = `Hello ${ten}`; // Template Strings

/**
 * Object literals (object chân phương)
 */

let hoTen = "Nguyen";
let lop = "FE 32";

let objectPeople = {
  hoTen, //hoTen: hoTen
  lop //lop: lop
};

let propHoTen = "hoTen";
let propLop = "lop";

let propObjectPeople = {
  [propHoTen]: "Nguyen",
  [propLop]: "FE 32"
};

/**
 * For … in || For ... of
 */

let listFriend = ["Nguyen", "Dat", "Phuc", "Tuan"];
for (let index in listFriend) {
  console.log(index);
}

for (let item of listFriend) {
  console.log(item);
}
