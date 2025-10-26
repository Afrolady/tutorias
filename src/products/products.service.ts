import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { Product, ProductDocument } from './schemas/product.schema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
  ) {}

  // ✅ Corrección: tipo ajustado y eliminación de conflicto con .lean()
  async findAll(): Promise<ProductDocument[]> {
    return this.productModel.find().exec();
  }

  async create(dto: CreateProductDto): Promise<ProductDocument> {
    const created = new this.productModel(dto);
    return created.save();
  }
}
