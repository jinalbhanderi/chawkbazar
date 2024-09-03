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
