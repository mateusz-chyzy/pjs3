import { Injectable } from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";
import {Category} from "./domain/category";
import {CategoryDTO} from "./dto/category.dto";

@Injectable()
export class CategoryService {
    constructor(private prisma: PrismaService) {}

    async getAllCategories(): Promise<Category[]> {
        const categoryDb = await this.prisma.category.findMany({});

        return categoryDb.map((product) => new Category(product.id, product.name))
    }

    async getCategoryById(categoryId: string): Promise<Category>{
        const productDb = await this.prisma.category.findUnique({
            where:{
                id: categoryId
            }
        });
        return new Category(productDb.id, productDb.name)
    }
    async updateCategoryById(categoryId: string, data: CategoryDTO): Promise<Category>{
        const categoryDb = await this.prisma.category.update({
            where:{
                id: categoryId,
            },
            data:{
                name: data.name,
            }
        });
        return new Category(categoryDb.id,categoryDb.name)
    }
    async createCategory(data: CategoryDTO): Promise<Category>{
        const categoryDb = await this.prisma.category.create({
            data:{
                name: data.name,
            }
        });

        return new Category(categoryDb.id, categoryDb.name)
    }
    async deleteCategory(categoryId: string): Promise<Category>{
        const categoryDb = await this.prisma.category.delete({
            where:{
                id:categoryId
            }
        });

        return new Category(categoryDb.id, categoryDb.name)
    }
}
