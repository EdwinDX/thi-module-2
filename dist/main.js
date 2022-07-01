"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const rl = __importStar(require("readline-sync"));
const product_1 = require("./product");
const product_management_1 = require("./product-management");
let productManagement = new product_management_1.ProductManagement();
let a = new product_1.Product('a', 's', 2, 2, '2', 'A');
productManagement.addNew(a);
let b = new product_1.Product('b', 'm', 2, 2, '2', 'B');
productManagement.addNew(b);
let c = new product_1.Product('c', 'l', 2, 2, '2', 'C');
productManagement.addNew(c);
var Choice;
(function (Choice) {
    Choice[Choice["EXIT"] = 0] = "EXIT";
    Choice[Choice["SHOW"] = 1] = "SHOW";
    Choice[Choice["FIND_BY_NAME"] = 2] = "FIND_BY_NAME";
    Choice[Choice["ADD_NEW"] = 3] = "ADD_NEW";
    Choice[Choice["EDIT"] = 4] = "EDIT";
    Choice[Choice["REMOVE"] = 5] = "REMOVE";
})(Choice || (Choice = {}));
let choice = -1;
function startMenu() {
    console.log('1. Hien thi san pham');
    console.log('2. Tim kiem san pham theo ten');
    console.log('3. Them mot san pham');
    console.log('4. Chinh sua thong tin mot san pham');
    console.log('5. Xoa san pham');
    console.log('0. Thoat');
}
do {
    startMenu();
    choice = +rl.question('Nhap lua chon:   ');
    switch (choice) {
        case Choice.SHOW: {
            console.log(productManagement.getAllProduct());
            break;
        }
        case Choice.FIND_BY_NAME: {
            findProductByName();
            break;
        }
        case Choice.ADD_NEW: {
            addNewProduct();
            break;
        }
        case Choice.EDIT: {
            editProduct();
            break;
        }
        case Choice.REMOVE: {
            removeProduct();
            break;
        }
    }
} while (choice != Choice.EXIT);
function findProductByName() {
    let name = rl.question('Nhap ten san pham can tim:  ');
    let index = productManagement.findByName(name);
    if (index === -1) {
        console.log('San pham khong ton tai');
    }
    else {
        let product = productManagement.getAllProduct()[index];
        console.log(`Ma hang: ${product.getId()}    Ten: ${product.getName()}   Loai: ${product.getType()}  Gia: ${product.getPrice()}  So luong: ${product.getAmount()}`);
    }
}
function editProduct() {
    let id = +rl.question('Nhap ID san pham can sua: ');
    let name = inputProductName();
    let price = inputProductPrice();
    let amount = inputProductAmount();
    let describe = inputProductDescribe();
    let type = inputType();
    let newProduct = new product_1.Product(name, type, price, amount, '3', describe);
    productManagement.editById(id, newProduct);
}
function inputType() {
    let type = '';
    let isWrongType = true;
    do {
        type = rl.question('Nhap loai hang(s,m,l):  ');
        if (type == 's' || type == 'm' || type == 'l') {
            isWrongType = false;
        }
        else {
            console.log('Nhap khong hop le');
        }
    } while (isWrongType);
    return type;
}
function inputProductName() {
    let name = '';
    let isEmptyName = name === '';
    do {
        name = rl.question('Product Name:   ');
        if (name !== '') {
            isEmptyName = false;
        }
        else {
            console.log('Invalid name');
            isEmptyName = true;
        }
    } while (isEmptyName);
    return name;
}
// function inputProductType(): string {
//     let 
// }
function inputProductPrice() {
    let price = 0;
    let isInvalidPrice = true;
    do {
        price = +rl.question('Product Price:    ');
        if (price < 0) {
            console.log('Invalid price');
            isInvalidPrice = true;
        }
        else {
            isInvalidPrice = false;
        }
    } while (isInvalidPrice);
    return price;
}
function inputProductAmount() {
    let amount = 0;
    let isInvalidAmount = true;
    do {
        amount = +rl.question('Product Amount:  ');
        if (amount < 0) {
            console.log('Invalid amount');
            isInvalidAmount = true;
        }
        else {
            isInvalidAmount = false;
        }
    } while (isInvalidAmount);
    return amount;
}
function inputProductDescribe() {
    let describe = '';
    let isEmptyDescribe = describe === '';
    do {
        describe = rl.question('Product Describe:   ');
        if (describe !== '') {
            isEmptyDescribe = false;
        }
        else {
            console.log('Invalid describe');
            isEmptyDescribe = true;
        }
    } while (isEmptyDescribe);
    return describe;
}
function addNewProduct() {
    let name = inputProductName();
    let price = inputProductPrice();
    let amount = inputProductAmount();
    let describe = inputProductDescribe();
    let type = inputType();
    let newProduct = new product_1.Product(name, type, price, amount, '3', describe);
    productManagement.addNew(newProduct);
}
function removeProduct() {
    let id = +rl.question('Nhap id san pham can xoa:    ');
    productManagement.removeById(id);
}
