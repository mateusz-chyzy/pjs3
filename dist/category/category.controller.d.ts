import { CategoryService } from "./category.service";
import { Category } from "./domain/category";
import { CategoryDTO } from "./dto/category.dto";
import { CategoryID } from "./persistence/category.param";
export declare class CategoryController {
    private categoryService;
    constructor(categoryService: CategoryService);
    getCategories(): Promise<Category[]>;
    getCategory(params: CategoryID): Promise<Category>;
    updateProduct(params: CategoryID, updated: CategoryDTO): Promise<Category>;
    createProduct(updated: CategoryDTO): Promise<Category>;
    deleteProduct(params: CategoryID): Promise<Category>;
}
