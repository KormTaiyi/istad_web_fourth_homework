export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  brand: string;
}

export async function fetchProducts(): Promise<{ status: string; message: string; products: Product[] }> {
  const response = await fetch('https://fakestoreapi.in/api/products');
  const data = await response.json();
  return data;
}
