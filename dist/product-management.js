"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductManagement = void 0;
class ProductManagement {
    getAllProduct() {
        return ProductManagement.products;
    }
    findByName(name) {
        let allProducts = ProductManagement.products;
        let index = -1;
        for (let i = 0; i < allProducts.length; i++) {
            let isNeededProduct = allProducts[i].getName() === name;
            if (isNeededProduct) {
                index = i;
                return index;
            }
        }
        return index;
    }
    findById(id) {
        let allProducts = ProductManagement.products;
        let index = -1;
        for (let i = 0; i < allProducts.length; i++) {
            let isNeededProduct = allProducts[i].getId() === id;
            if (isNeededProduct) {
                index = i;
                return index;
            }
        }
        return index;
    }
    addNew(product) {
        ProductManagement.products.push(product);
    }
    removeById(id) {
        let index = this.findById(id);
        if (index === -1) {
            console.log('Khong ton tai mat hang can xoa');
        }
        else {
            ProductManagement.products.splice(index, 1);
            console.log('Xoa thanh cong');
            this.sortIdAfterRemoveAManga();
        }
    }
    editById(id, product) {
        let index = this.findById(id);
        if (index === -1) {
            console.log('Khong ton tai mat hang can sua');
        }
        else {
            ProductManagement.products[index] = product;
        }
    }
    sortIdAfterRemoveAManga() {
        ProductManagement.products.forEach((product, index) => {
            product.setId(index + 1);
        });
    }
}
exports.ProductManagement = ProductManagement;
ProductManagement.products = [];
