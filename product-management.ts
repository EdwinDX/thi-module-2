import { Product } from "./product";

export class ProductManagement {
    static products: Product[] = []
    getAllProduct(): Product[] {
        return ProductManagement.products
    }
    findByName(name: string): number {
        let allProducts: Product[] = ProductManagement.products
        let index: number = -1
        for (let i=0;i<allProducts.length;i++) {
            let isNeededProduct: boolean = allProducts[i].getName() === name
            if (isNeededProduct) {
                index = i
                return index
            }
        }
        return index
    }
    findById(id: number): number {
        let allProducts: Product[] = ProductManagement.products
        let index: number = -1
        for (let i=0;i<allProducts.length;i++) {
            let isNeededProduct: boolean = allProducts[i].getId() === id
            if (isNeededProduct) {
                index = i
                return index
            }
        }
        return index
    }
    addNew(product: Product): void {
        ProductManagement.products.push(product)
    }
    removeById(id: number): void {
        let index = this.findById(id)
        if (index === -1) {
            console.log('Khong ton tai mat hang can xoa')
        }
        else {
            ProductManagement.products.splice(index,1)
            console.log('Xoa thanh cong')
            this.sortIdAfterRemoveAManga()
        }
    }
    editById(id: number, product: Product) {
        let index = this.findById(id)
        if (index===-1) {
            console.log('Khong ton tai mat hang can sua')
        }
        else {
            ProductManagement.products[index] = product
        }
    }
    sortIdAfterRemoveAManga(): void {
        ProductManagement.products.forEach((product, index) => {
            product.setId(index+1)
        });
    }
}