export type TCategory = {
  id: number;
  name: string;
  image: string;
  creationAt: string;
  updatedAt: string;
};

export type TProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: string;
  updatedAt: string;
  category: TCategory;
};
