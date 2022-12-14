import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {ProductService} from "./product.service";
import {Product} from "./dto/product";
import {ProductID} from "./persistence/product.param";
import {ProductDTO} from "./dto/product.dto";

@Controller()
export class ProductController {
    constructor(private productService: ProductService) {}

    @Get('/products')
    async getProducts(): Promise<Product[]> {
        const products = await this.productService.getAllProducts()
        return Product.toManyJson(products);
    }
    @Get('/product/:id')
    async getProduct(@Param() params: ProductID): Promise<Product> {
        const product = await this.productService.getProductById(params.id)
        return Product.toJson(product);
    }
    @Patch('/product/:id')
    async updateProduct(
        @Param() params: ProductID,
        @Body() updated: ProductDTO): Promise<Product> {
        const product = await this.productService.updateProductById(params.id, updated)
        return Product.toJson(product);
    }
    @Post('/product')
    async createProduct(
        @Body() updated: ProductDTO): Promise<Product> {
        const product = await this.productService.createProduct(updated)
        return Product.toJson(product);
    }
    @Delete('/product/:id')
    async deleteProduct(
        @Param() params: ProductID): Promise<Product> {
        const product = await this.productService.deleteProduct(params.id)
        return Product.toJson(product);
    }
}
