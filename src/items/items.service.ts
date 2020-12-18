import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemsService {
    constructor(@InjectModel('Item') private readonly itemsModel: Model<Item>) { }

    async findAll(): Promise<Item[]> {
        return await this.itemsModel.find();
    }

    async findOne(id: string): Promise<Item> {
        return await this.itemsModel.findOne({ _id: id });
    }

    async postItem(item: Item): Promise<Item> {
        return await this.itemsModel.create(item);
    }

    async deleteItem(id: string): Promise<Item> {
        return this.itemsModel.findByIdAndDelete(id)
    }
}
