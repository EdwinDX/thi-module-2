"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const product_management_1 = require("./product-management");
class Product {
    constructor(name, type, price, amount, createdDay, describe) {
        this.id = product_management_1.ProductManagement.products.length + 1;
        this.name = name;
        this.type = type;
        this.price = price;
        this.amount = amount;
        this.createdDay = createdDay;
        this.describe = describe;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getType() {
        return this.type;
    }
    setType(type) {
        this.type = type;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }
    getAmount() {
        return this.amount;
    }
    setAmount(amount) {
        this.amount = amount;
    }
    getCreatedDay() {
        return this.createdDay;
    }
    setCreatedDay(createdDay) {
        this.createdDay = createdDay;
    }
    getDescribe() {
        return this.describe;
    }
    setDescribe(describe) {
        this.describe = describe;
    }
}
exports.Product = Product;
