export type TabId = 'home' | 'menu' | 'gallery' | 'location';

export interface MenuItem {
  name: string;
  description?: string;
  price: string;
  image?: string;
  category: 'kebab' | 'specialty' | 'dessert' | 'beverage';
}

export interface Review {
  name: string;
  role: string;
  stars: number;
  content: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  category: string;
  chefSpecial?: boolean;
}

export interface Reservation {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  specialRequests?: string;
  status: 'confirmed' | 'pending';
  createdAt: string;
}
