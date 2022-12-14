import { PrismaService } from "../prisma/prisma.service";
import { Category } from "./domain/category";
import { CategoryDTO } from "./dto/category.dto";
export declare class CategoryService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllCategories(): Promise<Category[]>;
    getCategoryById(categoryId: string): Promise<Category>;
    updateCategoryById(categoryId: string, data: CategoryDTO): Promise<Category>;
    createCategory(data: CategoryDTO): Promise<Category>;
    deleteCategory(categoryId: string): Promise<Category>;
}
