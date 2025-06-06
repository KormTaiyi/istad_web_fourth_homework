export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}

export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch('https://fakestoreapi.in/api/products');
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  const data: Product[] = await response.json();
  return data;
}
