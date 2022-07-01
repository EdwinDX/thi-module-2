import { ProductManagement } from "./product-management"

export class Product {
    private id: number
    private name: string
    private type: string
    private price: number
    private amount: number
    private createdDay: string
    private describe: string
    constructor( name: string, type: string, price: number, amount: number, createdDay: string, describe: string) {
        this.id = ProductManagement.products.length+1
        this.name = name
        this.type = type
        this.price = price
        this.amount = amount
        this.createdDay = createdDay
        this.describe = describe
    }
    getId(): number {
        return this.id
    }
    setId(id: number): void {
        this.id = id
    }
    getName(): string {
        return this.name
    }
    setName(name: string): void {
        this.name = name
    }
    getType(): string {
        return this.type
    }
    setType(type: string): void {
        this.type = type
    }
    getPrice(): number {
        return this.price
    }
    setPrice(price: number): void {
        this.price = price
    }
    getAmount(): number {
        return this.amount
    }
    setAmount(amount: number): void {
        this.amount = amount
    }
    getCreatedDay(): string {
        return this.createdDay
    }
    setCreatedDay(createdDay: string): void {
        this.createdDay = createdDay
    }
    getDescribe(): string {
        return this.describe
    }
    setDescribe(describe: string): void {
        this.describe = describe
    }
}