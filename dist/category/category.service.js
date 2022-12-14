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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const category_1 = require("./domain/category");
let CategoryService = class CategoryService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllCategories() {
        const categoryDb = await this.prisma.category.findMany({});
        return categoryDb.map((product) => new category_1.Category(product.id, product.name));
    }
    async getCategoryById(categoryId) {
        const productDb = await this.prisma.category.findUnique({
            where: {
                id: categoryId
            }
        });
        return new category_1.Category(productDb.id, productDb.name);
    }
    async updateCategoryById(categoryId, data) {
        const categoryDb = await this.prisma.category.update({
            where: {
                id: categoryId,
            },
            data: {
                name: data.name,
            }
        });
        return new category_1.Category(categoryDb.id, categoryDb.name);
    }
    async createCategory(data) {
        const categoryDb = await this.prisma.category.create({
            data: {
                name: data.name,
            }
        });
        return new category_1.Category(categoryDb.id, categoryDb.name);
    }
    async deleteCategory(categoryId) {
        const categoryDb = await this.prisma.category.delete({
            where: {
                id: categoryId
            }
        });
        return new category_1.Category(categoryDb.id, categoryDb.name);
    }
};
CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map