"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const product_1 = require("./dto/product");
let ProductService = class ProductService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllProducts() {
        const productsDb = await this.prisma.product.findMany({ include: {
                Category: true
            } });
        return productsDb.map((product) => new product_1.Product(product.id, product.name, product.price, product.img, product.Category.name));
    }
    async getProductById(productId) {
        const productDb = await this.prisma.product.findUnique({
            where: {
                id: productId
            },
            include: {
                Category: true
            }
        });
        return new product_1.Product(productDb.id, productDb.name, productDb.price, productDb.img, productDb.Category.name);
    }
    async updateProductById(productId, data) {
        const productDb = await this.prisma.product.update({
            where: {
                id: productId,
            },
            data: {
                name: data.name,
                price: data.price,
            },
            include: {
                Category: true
            }
        });
        return new product_1.Product(productDb.id, productDb.name, productDb.price, productDb.img, productDb.Category.name);
    }
    async createProduct(data) {
        const productDb = await this.prisma.product.create({
            data: {
                name: data.name,
                price: data.price
            },
            include: {
                Category: true
            }
        });
        return new product_1.Product(productDb.id, productDb.name, productDb.price, productDb.img, productDb.Category.name);
    }
    async deleteProduct(productId) {
        const productDb = await this.prisma.product.delete({
            where: {
                id: productId
            },
            include: {
                Category: true
            }
        });
        return new product_1.Product(productDb.id, productDb.name, productDb.price, productDb.img, productDb.Category.name);
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map