import {ApiProperty} from "@nestjs/swagger";

export class CategoryDTO {
    @ApiProperty()
    id: string;
    @ApiProperty()
    name: string;
}