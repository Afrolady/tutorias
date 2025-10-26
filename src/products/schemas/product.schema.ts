import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Product extends Document {
  @Prop({ required: true })
  codigo!: string;

  @Prop({ required: true })
  nombre!: string;
}

// ✅ Exportamos también el tipo ProductDocument
export type ProductDocument = Product & Document;

export const ProductSchema = SchemaFactory.createForClass(Product);
