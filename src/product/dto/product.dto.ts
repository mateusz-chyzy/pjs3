import {ApiProperty} from "@nestjs/swagger";

export class ProductDTO {
    @ApiProperty()
    id: string;
    @ApiProperty()
    name: string;
    @ApiProperty()
    price: number;
}