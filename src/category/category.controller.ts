import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {CategoryService} from "./category.service";
import {Category} from "./domain/category";
import {CategoryDTO} from "./dto/category.dto";
import {CategoryID} from "./persistence/category.param";

@Controller()
export class CategoryController {
    constructor(private categoryService: CategoryService) {}

    @Get('/categories')
    async getCategories(): Promise<Category[]> {
        const categories = await this.categoryService.getAllCategories()
        return Category.toManyJson(categories);
    }
    @Get('/category/:id')
    async getCategory(@Param() params: CategoryID): Promise<Category> {
        const category = await this.categoryService.getCategoryById(params.id)
        return Category.toJson(category);
    }
    @Patch('/category/:id')
    async updateProduct(
        @Param() params: CategoryID,
        @Body() updated: CategoryDTO): Promise<Category> {
        const category = await this.categoryService.updateCategoryById(params.id, updated)
        return Category.toJson(category);
    }
    @Post('/category')
    async createProduct(
        @Body() updated: CategoryDTO): Promise<Category> {
        const category = await this.categoryService.createCategory(updated)
        return Category.toJson(category);
    }
    @Delete('/category/:id')
    async deleteProduct(
        @Param() params: CategoryID): Promise<Category> {
        const category = await this.categoryService.deleteCategory(params.id)
        return Category.toJson(category);
    }
}
