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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const common_1 = require("@nestjs/common");
const category_service_1 = require("./category.service");
const category_1 = require("./domain/category");
const category_dto_1 = require("./dto/category.dto");
const category_param_1 = require("./persistence/category.param");
let CategoryController = class CategoryController {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    async getCategories() {
        const categories = await this.categoryService.getAllCategories();
        return category_1.Category.toManyJson(categories);
    }
    async getCategory(params) {
        const category = await this.categoryService.getCategoryById(params.id);
        return category_1.Category.toJson(category);
    }
    async updateProduct(params, updated) {
        const category = await this.categoryService.updateCategoryById(params.id, updated);
        return category_1.Category.toJson(category);
    }
    async createProduct(updated) {
        const category = await this.categoryService.createCategory(updated);
        return category_1.Category.toJson(category);
    }
    async deleteProduct(params) {
        const category = await this.categoryService.deleteCategory(params.id);
        return category_1.Category.toJson(category);
    }
};
__decorate([
    (0, common_1.Get)('/categories'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "getCategories", null);
__decorate([
    (0, common_1.Get)('/category/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_param_1.CategoryID]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "getCategory", null);
__decorate([
    (0, common_1.Patch)('/category/:id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_param_1.CategoryID,
        category_dto_1.CategoryDTO]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "updateProduct", null);
__decorate([
    (0, common_1.Post)('/category'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_dto_1.CategoryDTO]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "createProduct", null);
__decorate([
    (0, common_1.Delete)('/category/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_param_1.CategoryID]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "deleteProduct", null);
CategoryController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], CategoryController);
exports.CategoryController = CategoryController;
//# sourceMappingURL=category.controller.js.map