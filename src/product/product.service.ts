import { Injectable } from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";
import {Product} from "./dto/product";
import {ProductDTO} from "./dto/product.dto";

@Injectable()
export class ProductService {
    constructor(private prisma: PrismaService) {}

    async getAllProducts(): Promise<Product[]> {
        const productsDb = await this.prisma.product.findMany({});

        return productsDb.map((product) => new Product(product.id, product.name, product.price))
    }

    async getProductById(productId: string): Promise<Product>{
        const productDb = await this.prisma.product.findUnique({
            where:{
                id: productId
            }
        });
        return new Product(productDb.id, productDb.name, productDb.price)
    }
    async updateProductById(productId: string, data: ProductDTO): Promise<Product>{
        const productDb = await this.prisma.product.update({
            where:{
                id: productId,
            },
            data:{
                name: data.name,
                price: data.price
            }
        });
        return new Product(productDb.id,productDb.name, productDb.price)
    }
    async createProduct(data: ProductDTO): Promise<Product>{
        const productDb = await this.prisma.product.create({
            data:{
                name: data.name,
                price: data.price
            }
        });

        return new Product(productDb.id, productDb.name, productDb.price)
    }
    async deleteProduct(productId: string): Promise<Product>{
        const productDb = await this.prisma.product.delete({
            where:{
                id:productId
            }
        });

        return new Product(productDb.id, productDb.name, productDb.price)
    }
}
