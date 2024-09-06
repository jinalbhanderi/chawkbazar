export interface CategoryData {
  items: {
    productName: string;
    imageUrl: string;
    newPrice: string;
    oldPrice: string;
  }[];
}

export interface Categories {
  [key: string]: CategoryData;
}
export interface Product {
  imageUrl: string;
  productName: string;
  newPrice: string;
  oldPrice: string;
  category?: string;
  brand?: string;
  variations?: string;
}

export interface ProductData {
  [key: string]: Product[];
}
