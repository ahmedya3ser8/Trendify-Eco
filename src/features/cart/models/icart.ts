import type { IProduct } from "@models/iproduct";

export interface ICart {
  cartOwner: string;
  createdAt: string;
  updatedAt: string;
  _id: string;
  totalCartPrice: number;
  products: {
    count: number;
    price: number;
    _id: string;
    product: IProduct;
  }[]
}
