export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  material: string;
  colors: string[];
  imageUrl: string;
  retailer: string;
  productUrl: string;
  isOnSale: boolean;
}

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Estate-Rib Quarter-Zip Sweater',
    brand: 'Polo Ralph Lauren',
    price: 198,
    material: 'Cashmere Blend',
    colors: ['#2c3e50', '#1a1a1a', '#8b4513'],
    imageUrl: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=500&fit=crop',
    retailer: 'Polo Ralph Lauren',
    productUrl: '#',
    isOnSale: false,
  },
  {
    id: '2',
    name: 'Italian Merino Quarter-Zip',
    brand: 'J.Crew',
    price: 79,
    originalPrice: 128,
    material: 'Merino Wool',
    colors: ['#1a1a1a', '#2c5f7c', '#556b2f'],
    imageUrl: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=400&h=500&fit=crop',
    retailer: 'J.Crew',
    productUrl: '#',
    isOnSale: true,
  },
  {
    id: '3',
    name: 'The Uniform Quarter-Zip',
    brand: 'Everlane',
    price: 68,
    material: 'Organic Cotton',
    colors: ['#556b2f', '#2f4f4f', '#f5f5dc'],
    imageUrl: 'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=400&h=500&fit=crop',
    retailer: 'Everlane',
    productUrl: '#',
    isOnSale: false,
  },
  {
    id: '4',
    name: 'Lightweight Quarter-Zip Pullover',
    brand: 'Bonobos',
    price: 98,
    material: 'Supima Cotton',
    colors: ['#8b4513', '#4a4a4a', '#1c3b54'],
    imageUrl: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=500&fit=crop',
    retailer: 'Bonobos',
    productUrl: '#',
    isOnSale: false,
  },
  {
    id: '5',
    name: 'City Sweat Quarter-Zip',
    brand: 'Lululemon',
    price: 128,
    material: 'Performance Tech',
    colors: ['#2c5f7c', '#1a1a1a', '#4a4a4a'],
    imageUrl: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=400&h=500&fit=crop',
    retailer: 'Lululemon',
    productUrl: '#',
    isOnSale: false,
  },
  {
    id: '6',
    name: 'Extra Fine Merino Half-Zip',
    brand: 'Uniqlo',
    price: 39,
    originalPrice: 59,
    material: 'Merino Wool',
    colors: ['#f5f5dc', '#1a1a1a', '#2f4f4f'],
    imageUrl: 'https://images.unsplash.com/photo-1620012253507-0b5e5e8b4e4c?w=400&h=500&fit=crop',
    retailer: 'Uniqlo',
    productUrl: '#',
    isOnSale: true,
  },
];