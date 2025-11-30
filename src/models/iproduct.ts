import type { ICategory } from "./icategory";

export interface IProduct {
  createdAt: string;
  description: string;
  id: string;
  imageCover: string;
  title: string;
  slug: string;
  updatedAt: string;
  _id: string;
  images: string[];
  price: number;
  quantity: number;
  ratingsAverage: number;
  ratingsQuantity: number;
  sold: number;
  subcategory: ICategory[],
  category: ICategory,
  brand: {
    image: string;
    name: string;
    _id: string;
    slug: string;
  }
}