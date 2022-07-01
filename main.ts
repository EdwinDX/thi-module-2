import { type } from "os";
import * as rl from "readline-sync";
import { Product } from "./product";
import { ProductManagement } from "./product-management";
let productManagement = new ProductManagement()

let a = new Product('a','s',2,2,'A')
productManagement.addNew(a)
let b = new Product('b','m',2,2,'B')
productManagement.addNew(b)
let c = new Product('c','l',2,2,'C')
productManagement.addNew(c)
enum Choice {
    EXIT = 0,
    SHOW = 1,
    FIND_BY_NAME = 2,
    ADD_NEW = 3,
    EDIT = 4,
    REMOVE = 5
  }
let choice: number = -1



function startMenu() {
    console.log('1. Hien thi san pham')
    console.log('2. Tim kiem san pham theo ten')
    console.log('3. Them mot san pham')
    console.log('4. Chinh sua thong tin mot san pham')
    console.log('5. Xoa san pham')
    console.log('0. Thoat')
}

do {
    startMenu()
    choice = +rl.question('Nhap lua chon:   ')
    switch(choice) {
        case Choice.SHOW: {
            console.log(productManagement.getAllProduct())
            break
        }
        case Choice.FIND_BY_NAME: {
            findProductByName()
            break
        }
        case Choice.ADD_NEW: {
            addNewProduct()
            break
        }
        case Choice.EDIT: {
            editProduct()
            break
        }
        case Choice.REMOVE: {
            removeProduct()
            break
        }
    }
} while (choice != Choice.EXIT)

function findProductByName() {
    let name: string = rl.question('Nhap ten san pham can tim:  ')
    let index: number = productManagement.findByName(name)
    if (index === -1) {
        console.log('San pham khong ton tai')
    }
    else {
        let product: Product = productManagement.getAllProduct()[index]
        console.log(`Ma hang: ${product.getId()}    Ten: ${product.getName()}   Loai: ${product.getType()}  Gia: ${product.getPrice()}  So luong: ${product.getAmount()}`)
    }
}
function editProduct() {
    let id: number = +rl.question('Nhap ID san pham can sua: ')
    let name: string = inputProductName()
    let price: number = inputProductPrice()
    let amount: number = inputProductAmount()
    let describe: string = inputProductDescribe()
    let type: string = inputType()
    let newProduct = new Product(name,type,price,amount,describe)
    productManagement.editById(id,newProduct)
}

function inputType(): string {
    let type: string = ''
    let isWrongType: boolean = true
    do {
        type = rl.question('Nhap loai hang(s,m,l):  ')
        if (type == 's' || type ==   'm' || type == 'l') {
            isWrongType = false
        }
        else {
            console.log('Nhap khong hop le')
        }
    } while (isWrongType)
    return type
}



function inputProductName(): string {
    let name: string = ''
    let isEmptyName: boolean = name === ''
    do {
        name = rl.question('Product Name:   ')
        if (name !== '') {
            isEmptyName = false
        }
        else {
            console.log('Invalid name')
            isEmptyName = true
        }
    } while (isEmptyName)
    return name
}
// function inputProductType(): string {
//     let 
// }
function inputProductPrice(): number {
    let price: number = 0
    let isInvalidPrice: boolean = true
    do {
        price = +rl.question('Product Price:    ')
        if (price < 0) {
            console.log('Invalid price')
            isInvalidPrice = true
        }
        else {
            isInvalidPrice = false
        }
    } while (isInvalidPrice)
    return price
}
function inputProductAmount(): number {
    let amount: number = 0
    let isInvalidAmount: boolean = true
    do {
        amount = +rl.question('Product Amount:  ')
        if (amount < 0) {
            console.log('Invalid amount')
            isInvalidAmount = true
        }
        else {
            isInvalidAmount = false
        }
    } while(isInvalidAmount)
    return amount
}
function inputProductDescribe(): string {
    let describe: string = ''
    let isEmptyDescribe: boolean = describe === ''
    do {
        describe = rl.question('Product Describe:   ')
        if (describe !== '') {
            isEmptyDescribe = false
        }
        else {
            console.log('Invalid describe')
            isEmptyDescribe = true
        }
    } while (isEmptyDescribe)
    return describe

}
function addNewProduct() {
    let name: string = inputProductName()
    let price: number = inputProductPrice()
    let amount: number = inputProductAmount()
    let describe: string = inputProductDescribe()
    let type: string = inputType()
    let newProduct = new Product(name,type,price,amount,describe)
    productManagement.addNew(newProduct)
}
function removeProduct() {
    let id: number = +rl.question('Nhap id san pham can xoa:    ')
    productManagement.removeById(id)
}