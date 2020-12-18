import { Controller, Get, Body, Param, Delete, Put, Post } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {

    constructor(private readonly ItemsServ: ItemsService) {}

    @Get()
    async findAll(): Promise<Item[]> {
        return this.ItemsServ.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Item> {
        return this.ItemsServ.findOne(id);
    }

    @Post()
    create(@Body() CreateItemDto: CreateItemDto): any {
        return this.ItemsServ.postItem(CreateItemDto);
    }

    @Delete(':id')
    delete(@Param('id') id): Promise<Item> {
        return this.ItemsServ.deleteItem(id)
    }

    @Put(':id')
    update(@Body() updateItemDto: CreateItemDto, @Param('id') id): string {
        return `Update ${id} - Name: ${updateItemDto.name}`;
    }
}
