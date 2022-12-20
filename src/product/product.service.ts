import { Injectable } from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";
import {Product} from "./dto/product";
import {ProductDTO} from "./dto/product.dto";

@Injectable()
export class ProductService {
    constructor(private prisma: PrismaService) {}

    async getAllProducts(): Promise<Product[]> {
        const productsDb = await this.prisma.product.findMany({include:{
            Category:true
            }});

        return productsDb.map((product) => new Product(product.id, product.name, product.price,product.img,product.Category.name))
    }

    async getProductById(productId: string): Promise<Product>{
        const productDb = await this.prisma.product.findUnique({
            where:{
                id: productId
            },
            include:{
                Category:true
            }
        });
        return new Product(productDb.id, productDb.name, productDb.price,productDb.img,productDb.Category.name)
    }
    async updateProductById(productId: string, data: ProductDTO): Promise<Product>{
        const productDb = await this.prisma.product.update({
            where:{
                id: productId,
            },
            data:{
                name: data.name,
                price: data.price,
            },
            include:{
                Category:true
            }
        });
        return new Product(productDb.id,productDb.name, productDb.price, productDb.img,productDb.Category.name)
    }
    async createProduct(data: ProductDTO): Promise<Product>{
        const productDb = await this.prisma.product.create({
            data:{
                name: data.name,
                price: data.price
            },
            include:{
                Category:true
            }
        });

        return new Product(productDb.id, productDb.name, productDb.price, productDb.img,productDb.Category.name)
    }
    async deleteProduct(productId: string): Promise<Product>{
        const productDb = await this.prisma.product.delete({
            where:{
                id:productId
            },
            include:{
                Category:true
            }
        });

        return new Product(productDb.id, productDb.name, productDb.price, productDb.img,productDb.Category.name)
    }
}
