export interface IStore {
  name: string;
  phone?: number;
  imageUrl: string;
  address: string;
}

export interface IProduct {
  name: String;
  price: Number;
  imageUrl: String;
  description?: String;
  preperationTime?: Number;
  storeId: String;
  categoryId: String;
  tagId: String;
}

export interface ICategory {
  title: string;
  imageUrl: string;
}

export interface ITag {
  title: string;
  imageUrl: string;
}
