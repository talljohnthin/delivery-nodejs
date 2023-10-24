export interface IStore {
  name: string;
  phone?: number;
  image: IImage;
  address: string;
}

export interface IProduct {
  name: String;
  price: Number;
  image: IImage;
  description?: String;
  preperationTime?: Number;
  storeId: String;
  categoryId: String;
  tagId: String;
}

export interface ICategory {
  title: string;
  image: IImage;
}

export interface ITag {
  title: string;
  image: IImage;
}

export interface IOrder {
  userId: string;
  total: string;
  products: IProduct[];
  status: "Active" | "Completed" | "Canceled";
}

export interface IUser {
  name: string;
  phone: number;
  password: string;
  email?: string;
  address?: string;
  photo?: IImage;
}

export interface IImage {
  public_id: string;
  url: string;
}
