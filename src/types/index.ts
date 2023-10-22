export interface IStore {
  name: string;
  phone?: number;
  imageUrl: string;
  address: string;
}

export interface ICategory {
  title: string;
  imageUrl: string;
}

export interface ITag {
  title: string;
  imageUrl: string;
}
