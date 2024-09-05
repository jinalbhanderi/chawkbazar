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
  category?: string; // Optional category
  brand?: string; // Optional brand
}

export interface ProductData {
  [key: string]: Product[];
}
